import * as shell from 'shelljs';

shell.cp('-R', ['src/views/emails'], 'dist_cp/views/');
shell.cp('-R', ['src/views/layouts'], 'dist_cp/views/');
shell.cp('-R', ['src/views/pages'], 'dist_cp/views/');
shell.cp('-R', ['src/views/partials'], 'dist_cp/views/');


shell.cp('-Rf', ['src/public/images'], 'dist_cp/public/images/');
shell.cp('-Rf', ['src/public/fonts'], 'dist_cp/public/fonts/');
