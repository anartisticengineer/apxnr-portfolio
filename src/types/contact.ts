export interface FormSubmission {
  "name-field": string;
  "email-field": string;
  "message-field": string;
  "inquiry-type-field": InquiryType;
}

export enum InquiryType {
  Commission = "Commission",
  JobOpportunity = "Job Opportunities",
  Other = "Other/Just saying hi ;)",
}
