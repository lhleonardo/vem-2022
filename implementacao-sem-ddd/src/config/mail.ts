interface MailDriver {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      name: 'secretuser | Equipe GoBarber',
      email: 'admin@secretuserbraz.xyz',
    },
  },
} as MailDriver;
