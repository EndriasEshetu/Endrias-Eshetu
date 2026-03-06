export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface NewCertificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}
