import express from 'express';
import nodeMailer, {Transporter} from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';
import config from '../config';
import MailTemplate from '../enums/MailTemplate';
import ejs from 'ejs';
import {PRIORITY_HIGH} from 'constants';
import Utils from '../utils';

/**
 * MailerLoader class
 * Used for create Mail
 */
export class MailerLoader {
  private static INSTANCE: Transporter;

  /**
   * Allows to get Transporter
   * @return {Promise<Transporter>}
   */
  public static async getInstance(): Promise<Transporter> {
    if (MailerLoader.INSTANCE === undefined) {
      MailerLoader.createTransporter();
    }

    return new Promise((resolve: any) => {
      MailerLoader.INSTANCE.verify((error, success) => {
        if (error) {
          MailerLoader.createTransporter();
          console.log(error);
        }
        resolve();
      });
    }).then(() => {
      return MailerLoader.INSTANCE;
    });
  }

  /**
   * Allows to create Transporter
   */
  private static createTransporter(): any {
    MailerLoader.INSTANCE = nodeMailer.createTransport({
      pool: true,
      host: config.mailer.host,
      port: parseInt(config.mailer.port, 10),
      secure: true,
      auth: {
        user: config.mailer.auth.user,
        pass: config.mailer.auth.password,
      },
    });
  }

  /**
   * Allows you to send an email to a customer
   * @param {string} emailReceipt receipt email
   * @param {MailTemplate} template The template used
   * @param {any} params The parameters to fill the template
   * @param {express.Response} res The request
   * @param {Mail.Attachment} attachments Attachments to include in the email
   * @param {string[]} bbc The copy email
   * @param {string} senderName The name of sender
   */
  public static async send(emailReceipt: string | string[], template: MailTemplate, params: any, res: express.Response | any, attachments: Mail.Attachment[], bbc: string[], senderName: string) {
    const templatePath = path.join(path.resolve(), `/dist/views/emails/pages/${template}.ejs`);
    const templateStr = ejs.fileLoader(templatePath);
    const templateEmail = ejs.compile(templateStr.toString(), {filename: templatePath});

    const templateFormated = templateEmail(params);

    if (config.nodeEnv !== 'production') {
      emailReceipt = 'test@dessindecole.com';
    }

    const mailOptions: Mail.Options = {
      from: senderName + `<${config.mailer.auth.user}>`,
      to: emailReceipt,
      subject: res.__(`emails.${template}.subject`, {params}),
      html: templateFormated,
      attachments,
      bcc: bbc,
    };

    const transporter = await MailerLoader.getInstance();

    transporter.sendMail(mailOptions, (err: Error, info: any) => {
      if (err) {
        return console.log(err);
      }
      Utils.log(PRIORITY_HIGH, 'Email', template.toString(), 'sended at', emailReceipt);
    });
  }
}

