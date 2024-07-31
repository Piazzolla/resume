export interface Resume {
  contact_title:    string;
  contact:          string;
  about_title:      string;
  about:            string[];
  experience_title: string;
  experience:       Experience[];
}

export interface Experience {
  logo:         string;
  title:        string;
  time:         string;
  years:        string;
  technologies: string[];
  description:  string;
}

export interface Certification {
  logo:         string;
  title:        string;
  description:  string;
}
