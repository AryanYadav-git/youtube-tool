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
                  {" "}
                  Privacy Policy{" "}
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
                <p className="mb-4">
                  This Privacy Policy describes how we collect, use, and
                  disclose information that we obtain through our website and
                  services.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Information We Collect
                </h3>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Personal Information: We may collect your name, email
                    address, and other personal information when you provide it
                    to us.
                  </li>
                  <li>
                    Usage Information: We may collect information about your
                    usage of our website and services, such as the pages you
                    visit and your interactions with our content.
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">
                  How We Use Your Information
                </h3>
                <p>
                  We may use your information for various purposes, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Providing our services to you</li>
                  <li>
                    Sending you updates and information about our products and
                    services
                  </li>
                  <li>Improving our website and services</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">
                  Disclosure of Your Information
                </h3>
                <p>
                  We may disclose your information to third parties in certain
                  circumstances, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>With your consent</li>
                  <li>When required by law</li>
                  <li>
                    With service providers and partners who assist us in
                    delivering our services
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p>
                  We take reasonable measures to protect your information, but
                  no method of transmission over the internet is 100% secure. We
                  cannot guarantee the security of your information.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Changes to this Privacy Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on our website. By continuing to use
                  our services, you agree to the updated Privacy Policy.
                </p>
                <p className="mt-4">
                  <a
                    href="/privacy-policy"
                    className="text-blue-500 hover:underline"
                  >
                    Read our full Privacy Policy
                  </a>
                  .
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