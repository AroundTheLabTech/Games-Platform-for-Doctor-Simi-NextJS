import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container-terms-and-conditions">
      <h1 className="title">Terms & Conditions</h1>
      <p className="text">
        These terms and conditions apply to the SimiJuegos app (hereby referred to as &quot;Application&quot;)
        for mobile devices that was created by Farmacias de Similares S.A. de C.V. (hereby referred
        to as &quot;Service Provider&quot;) as a Free service.
      </p>
      <p className="text">
        Upon downloading or utilizing the Application, you are automatically agreeing to the
        following terms. It is strongly advised that you thoroughly read and understand these terms
        prior to using the Application. Unauthorized copying, modification of the Application, any
        part of the Application, or our trademarks is strictly prohibited. Any attempts to extract
        the source code of the Application, translate the Application into other languages, or
        create derivative versions are not permitted. All trademarks, copyrights, database rights,
        and other intellectual property rights related to the Application remain the property of the
        Service Provider.
      </p>
      <p className="text">
        The Service Provider is dedicated to ensuring that the Application is as beneficial and
        efficient as possible. As such, they reserve the right to modify the Application or charge
        for their services at any time and for any reason. The Service Provider assures you that any
        charges for the Application or its services will be clearly communicated to you.
      </p>
      <p className="text">
        The Application stores and processes personal data that you have provided to the Service
        Provider in order to provide the Service. It is your responsibility to maintain the security
        of your phone and access to the Application. The Service Provider strongly advise against
        jailbreaking or rooting your phone, which involves removing software restrictions and
        limitations imposed by the official operating system of your device. Such actions could
        expose your phone to malware, viruses, malicious programs, compromise your phone&apos;s security
        features, and may result in the Application not functioning correctly or at all.
      </p>
      <div>
        <p className="text">
          Please note that the Application utilizes third-party services that have their own Terms
          and Conditions. Below are the links to the Terms and Conditions of the third-party service
          providers used by the Application:
        </p>
        <ul className="list">
          <li>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Google Play Services
            </a>
          </li>
        </ul>
      </div>
      <p className="text">
        Please be aware that the Service Provider does not assume responsibility for certain aspects.
        Some functions of the Application require an active internet connection, which can be Wi-Fi
        or provided by your mobile network provider. The Service Provider cannot be held responsible
        if the Application does not function at full capacity due to lack of access to Wi-Fi or if
        you have exhausted your data allowance.
      </p>
      <p className="text">
        If you are using the application outside of a Wi-Fi area, please be aware that your mobile
        network provider&apos;s agreement terms still apply. Consequently, you may incur charges from
        your mobile provider for data usage during the connection to the application, or other
        third-party charges. By using the application, you accept responsibility for any such
        charges, including roaming data charges if you use the application outside of your home
        territory (i.e., region or country) without disabling data roaming. If you are not the bill
        payer for the device on which you are using the application, they assume that you have
        obtained permission from the bill payer.
      </p>
      <h2 className="subtitle">Changes to These Terms and Conditions</h2>
      <p className="text">
        The Service Provider may periodically update their Terms and Conditions. Therefore, you are
        advised to review this page regularly for any changes. The Service Provider will notify you
        of any changes by posting the new Terms and Conditions on this page.
      </p>
      <p className="effectiveDate">These terms and conditions are effective as of 2025-02-28</p>
      <h2 className="subtitle">Contact Us</h2>
      <p className="text">
        If you have any questions or suggestions about the Terms and Conditions, please do not
        hesitate to contact the Service Provider at
        <a href="mailto:bryan@aroundthelab.com" className="link"> bryan@aroundthelab.com</a>.
      </p>
      <hr className="separator" />
      <p className="footerText">
        This Terms and Conditions page was generated by
        <a
          href="https://app-privacy-policy-generator.nisrulz.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          App Privacy Policy Generator
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
