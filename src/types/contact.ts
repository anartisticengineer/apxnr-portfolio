export interface FormSubmission {
  name: string;
  email: string;
  message: string;
  inquiryType: InquiryType;
}

export enum InquiryType {
  Commission = "Commission",
  JobOpportunity = "Job Opportunities",
  Other = "Other/Just saying hi ;)",
}
