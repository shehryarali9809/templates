type EmailTemplateMetadata = {
  imgSrc: string;
  emailHead: string;
  emailDesc: string;
  content: string[];
};

type EmailTemplatesContent = {
  [key: string]: EmailTemplateMetadata;
};
export const emailTemplatesContent: EmailTemplatesContent = {
  'Event Invitation': {
    imgSrc: '/assets/image6.png',
    emailHead: 'Event Invitation',
    emailDesc: 'Template for inviting people to a corporate event, conference, webinar, or social gathering.',
    content: [
      "<div><strong>Subject: You're Invited to a Party! </strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>You're invited to join us for a party to celebrate <strong>[occasion]</strong>. It will be a fun-filled event with music, food, and great company!</div>",
      "<div><strong>Date:</strong> [Date]</div>",
      "<div><strong>Time:</strong> [Time]</div>",
      "<div><strong>Location:</strong> [Location]</div>",
      "<div>We hope to see you there!</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div><strong>[Your Name]</strong></div>",
      "<div><strong>[Your Email]</strong></div>",
      "<div><strong>RSVP:</strong> [Link to RSVP]</div>"
    ]
  },
  'Job Application Follow-Up': {
    imgSrc: '/assets/image5.png',
    emailHead: 'Job Application Follow-Up',
    emailDesc: 'Template for following up on a job application after submitting a resume and cover letter.',
    content: [
      "<div><strong>Subject: Job Application Follow-Up </strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>Thank you for applying for [Job Title] at [Company]. We wanted to let you know that your application is currently under review.</div>",
      "<div>We appreciate your interest in joining our team and will get back to you with our decision as soon as possible.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  },
  'Sales Follow-Up': {
    imgSrc: '/assets/image4.png',
    emailHead: 'Sales Follow-Up',
    emailDesc: 'Template for following up with potential sales leads after an initial meeting or conversation.',
    content: [
      "<div><strong>Subject: Sales Follow-Up</strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>It was great discussing our products with you. I wanted to follow up to see if you had any more questions about [Product/Service] or if there's anything more we can help you with.</div>",
      "<div>Looking forward to hearing from you soon.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  },
  'Contract Renewal Reminder': {
    imgSrc: '/assets/image3.png',
    emailHead: 'Contract Renewal Reminder',
    emailDesc: 'Template for reminding clients or customers about an upcoming contract renewal date.',
    content: [
      "<div><strong>Subject: Contract Renewal Reminder </strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>This is a friendly reminder that your contract with [Service/Product] is due for renewal on [Renewal Date].</div>",
      "<div>We would love to continue serving you. Please let us know if you wish to renew or have any questions.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  },
  'Apology Email': {
    imgSrc: '/assets/image2.png',
    emailHead: 'Apology Email',
    emailDesc: 'Template for sending an apology to a client or customer for any inconvenience or mistake.',
    content: [
      "<div><strong>Subject: Apology Email</strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>We apologize for [Issue]. We understand how important it is to you and are taking immediate steps to ensure it doesn’t happen again.</div>",
      "<div>Thank you for your understanding.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  },
  'Newsletter Confirmation': {
    imgSrc: '/assets/image1.png',
    emailHead: 'Newsletter Confirmation',
    emailDesc: 'Template for confirming a user’s subscription to your newsletter.',
    content: [
      "<div><strong>Subject: Newsletter Subscription Confirmation</strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>Thank you for subscribing to our newsletter! You will now receive the latest news and updates from [Company/Service].</div>",
      "<div>We're excited to have you with us.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  }
,
  'Newsletter ': {
    imgSrc: '/assets/image1.png',
    emailHead: 'Newsletter Confirmation',
    emailDesc: 'Template for confirming a user’s subscription to your newsletter.',
    content: [
      "<div><strong>Subject: Newsletter Subscription Confirmation</strong></div>",
      "<br>",
      "<div><strong>Hello,</strong></div>",
      "<div>Thank you for subscribing to our newsletter! You will now receive the latest news and updates from [Company/Service].</div>",
      "<div>We're excited to have you with us.</div>",
      "<div><strong>Best regards,</strong></div>",
      "<div>[Your Name]</div>",
      "<div>[Your Email]</div>"
    ]
  }
  

};