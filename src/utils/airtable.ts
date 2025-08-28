const AIRTABLE_BASE_ID = 'appReu7zElgUjnZJy';
const AIRTABLE_TABLE_ID = 'tblGY4KXUhQE4G1ST';
const AIRTABLE_PAT = 'pat0C3POygGWPPDY0.5de5aea046bc67c98e8a660d59a4c942e447758b2136f5e0a78a03e1c489a510';

export interface ContactFormData {
  name: string;
  number: string;
  email: string;
  address: string;
  message: string;
}

export interface PhoneClickData {
  phoneNumber: string;
  timestamp: string;
  userAgent: string;
  page: string;
}



export const submitToAirtable = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          "fld3BeuUiqp9YW8K6": formData.name,
          "fldlC7Ap0FL2UAUHS": formData.number,
          "fldUjbOeZmeSUXfHo": formData.email,
          "fldPQr2BQRYrBaD1w": formData.address,
          "fldG7rTJbxlOQxmuQ": formData.message,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return false;
  }
};

export const trackPhoneClick = async (phoneClickData: PhoneClickData): Promise<boolean> => {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          "fld3BeuUiqp9YW8K6": `Phone Click - ${phoneClickData.phoneNumber}`,
          "fldlC7Ap0FL2UAUHS": phoneClickData.phoneNumber,
          "fldUjbOeZmeSUXfHo": phoneClickData.userAgent,
          "fldPQr2BQRYrBaD1w": phoneClickData.page,
          "fldG7rTJbxlOQxmuQ": `Phone clicked at ${phoneClickData.timestamp}`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error tracking phone click:', error);
    return false;
  }
};