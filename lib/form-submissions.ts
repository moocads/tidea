export type FormSubmission =
  | {
      kind: "contact";
      locale: "en" | "fr";
      firstName: string;
      lastName: string;
      email: string;
      retailer: string;
      orderNumber?: string;
      serialNumber?: string;
      topic: string;
      message: string;
      marketingConsent: boolean;
      turnstileToken: string;
      faxNumber: string;
    }
  | {
      kind: "partnership";
      locale: "en" | "fr";
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      position: string;
      company: string;
      address: string;
      years: number;
      websiteUrl: string;
      turnstileToken: string;
      faxNumber: string;
    }
  | {
      kind: "newsletter";
      locale: "en" | "fr";
      email: string;
      consent: true;
      turnstileToken: string;
      faxNumber: string;
    };

interface SubmissionResponse {
  reference: string;
  status: "queued" | "sent";
}

export async function submitForm(payload: FormSubmission): Promise<SubmissionResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_FORMS_API_URL?.replace(/\/$/, "");
  if (!baseUrl) throw new Error("forms_api_not_configured");

  const response = await fetch(`${baseUrl}/v1/submissions`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) throw new Error(`form_submission_${response.status}`);
  return (await response.json()) as SubmissionResponse;
}
