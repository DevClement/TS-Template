import * as shell from 'shelljs';

shell.cp('-R', ['src/views', 'src/locales'], 'dist/');

shell.cp('-Rf', ['src/public/img'], 'dist/public/img/');
shell.cp('-Rf', ['src/public/fonts'], 'dist/public/fonts/');
