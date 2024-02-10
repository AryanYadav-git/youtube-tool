import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import Done from "@mui/icons-material/Done";

function PrivacyPolicy() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className="font-sans bg-gray-100 flex items-center justify-center h-screen">
        <div x-data="{ showPrivacyPolicy: true }">
          <div
            x-show="showPrivacyPolicy"
            className="fixed z-10 inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
              x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
              x-transition:enter-start="opacity-0 scale-95"
              x-transition:enter-end="opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
              x-transition:leave-start="opacity-100 scale-100"
              x-transition:leave-end="opacity-0 scale-95"
              x-cloak
            >
              {/* Modal panel */}
              <div className="px-6 py-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                Middleman Terms and Conditions
                </h3>
              </div>
              <div
                className="prose max-w-screen-md p-6 overflow-y-auto"
                style={{
                  maxHeight: "70vh",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.375rem",
                  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="mb-6">
                  This Privacy Policy describes how we collect, use, and
                  disclose information that we obtain through our website and
                  services.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Introduction
                </h3>
                <p className="mb-2">Welcome to Middleman, a platform that facilitates collaboration between editors and YouTubers for video publishing.By accessing or using Middleman, you agree to comply with and be bound by these Terms and Conditions.</p>
                <h3 className="text-lg font-semibold mb-2">
                Registration
                </h3>
                <p className="mb-2">
                To use Middleman, you must register an account by providing your email, phone number, name, and YouTube API key.You agree to provide accurate and complete information during registration and to keep your account information up to date.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Permissions and Responsibilities
                </h3>
                <p className="mb-2">
                You understand and agree that Middleman acts as a middleman between editors and YouTubers, facilitating the exchange of video content.You grant Middleman permission to access your YouTube account and data through the YouTube Data API for the purpose of video publishing.You are responsible for the content you publish or review on Middleman, including ensuring compliance with YouTube's terms of service and copyright laws.
                </p>
                <h3 className="text-lg font-semibold mb-2"> Privacy</h3>
                <p className="mb-2">
                Middleman respects your privacy and will only use your personal information in accordance with our Privacy Policy.By using Middleman, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Security
                </h3>
                <p className="mb-2">
                You are responsible for maintaining the security of your Middleman account, including keeping your login credentials and API key secure.You agree not to share your account credentials or API key with anyone else or allow anyone else to access your account.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Termination
                </h3>
                <p className="mb-2">
                Middleman reserves the right to terminate or suspend your account at any time, with or without cause, and without prior notice. You may terminate your account at any time by contacting Middleman support.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Disclaimer of Warranties
                </h3>
                <p className="mb-2">
                Middleman is provided "as is" and "as available" without any warranties of any kind, express or implied. Middleman does not guarantee the availability, accuracy, or reliability of its services or the content provided by users.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Limitation of Liability
                </h3>
                <p className="mb-2">
                Middleman shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of Middleman.Middleman's total liability to you for all claims arising out of or relating to these Terms and Conditions shall not exceed the amount paid by you, if any, to Middleman during the twelve months preceding the claim.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Governing Law and Dispute Resolution
                </h3>
                <p className="mb-2">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].Any dispute arising out of or relating to these Terms and Conditions shall be resolved exclusively by the courts of [Your Jurisdiction].
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Changes to Terms and Conditions
                </h3>
                <p className="mb-2">
                Middleman reserves the right to modify or revise these Terms and Conditions at any time. Any changes to these Terms and Conditions will be effective immediately upon posting the revised terms on Middleman.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                Contact Us
                </h3>
                <p className="mb-10">
                If you have any questions or concerns about these Terms and Conditions, please contact us at [Contact Email].
                </p>
                <Checkbox
                  uncheckedIcon={<Done />}
                  slotProps={{
                    root: ({ checked, focusVisible }) => ({
                      sx: !checked
                        ? {
                            "& svg": { opacity: focusVisible ? 1 : 0 },
                            "&:hover svg": {
                              opacity: 1,
                            },
                          }
                        : undefined,
                    }),
                  }}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="agree" className="ml-2">
                  I Agree to the Terms and Conditions.
                </label>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                <button
                  onClick={() => {
                    showPrivacyPolicy = false;
                  }}
                  type="button"
                  className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm ${
                    !isChecked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!isChecked}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;