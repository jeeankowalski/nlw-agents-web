import lib from 'dayjs';
import 'dayjs/locale/pt-br';
import relativetime from 'dayjs/plugin/relativeTime';

lib.locale('pt-BR');
lib.extend(relativetime);

export const dayjs = lib;
