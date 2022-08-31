import { useEffect } from "react"

const MentionsEn = ({ t }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
       <div>
            <main className="container768 sectionContent textBlock">
            <h2>About the Dases Lab</h2>
            <p>Dases Lab proposes an example of a platform for the exchange of data on lifelong learning. It is an experimental site. </p>
            <h3>A catalog of resources</h3>
            <p>The Dases Lab experimental platform offers a catalog of reference data and services from heterogeneous sources in the field of lifelong learning.</p>
                <p>APIs are the tool allowing Users to transmit public data, personal data or services.</p>
                <h3>An interactive interface</h3>
                The Dases Lab portal is composed of several interfaces allowing:
                <ul>
                    <li>The provision of data and/or services via APIs (especially in real time),</li>
                    <li>Thematic searches, or the export of datasets via a catalog of data and services</li>
                </ul>
                <h3>Secure and controlled access and sharing</h3>
                To secure access, the Dases Lab proposes the definition of an ethical and legal framework for the use of services and data sharing:
                <ul>
                    <li>The use of licenses allowing the respect of the property of the data and the algorithms according to the commercial policy decided by their owner.</li>
                    <li>Contractualization services to ensure compliance with personal data protection regulations.</li>
                </ul>
                <hr/>
                <h2>How the Dases Lab works</h2>
                 <h3>Technical requirements</h3>
                   <p>Dases Lab is a saas application available only through a browser on a computer with an internet connection. Dases Lab cannot be held responsible for delays, interruptions or other problems inherent in the use of the Internet, electronic tools or other systems beyond its control.</p>
                   <p>The User must have installed on his computer and connected to the Dases Lab by one of the following internet browsers: Chrome, Firefox, Safari or Edge. The browser must have a recent version, i.e. the most recent official version provided by the publisher. The User must also install on his computer the Metamask digital identity wallet (see Authentication / Identity Creation) in its recent version.</p>
                   <p>Otherwise, the User cannot access Dases Lab and is informed by a page indicating that he/she is using a browser not supported by Dases Lab. In addition, the User must ensure that his or her representatives comply with the technical requirements, and Dases Lab cannot be held responsible for any malfunctioning due to non-compliance by the User and/or his or her representatives with these technical requirements.</p>
                 <h3>Authentification et création d'identité</h3>
                   <p>To access the Resources provided on the Dases Lab, each User must create a User account.</p>
                   <p>The Dases Lab ecosystem is based on the principle of Decentralized Identity for User management. Because of its innovative nature, the decentralized identity is being implemented but not yet industrialized.</p>
                   <p>Through this system, the User's identity may be subject to a verification procedure in order to access all Resources.</p>
                   <p>To access the Resources, the User shall use, under his or her own responsibility, the password and information provided when creating his or her Metamask account. The Metamask virtual wallet solution will eventually be replaced by <a href="https://www.bcdiploma.com/en" target="_blank" rel="noopener noreferrer">MyWallet.cloud</a></p>
                     <ul>
                        <li>Etape 1: Connect</li>
                        <li>Etape 2: Install Metamask and follow the indications available on <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">Metamask</a></li>
                     </ul> 
                 <hr/>
                 <h3>Content of the Dases Lab</h3>
                   <h4>Cataloging service</h4>
                    <p>Dases Lab offers its Users to present their Resource offers on the platform in the form of a Resource catalog.</p>
                    <p>In order to offer its Resources, the Supplier User must provide a Self-Description (cf. Définitions : Self-Description).</p>
                    <p>The User Provider is solely and entirely responsible for the Resources it offers and delivers to the User Purchaser. Under no circumstances shall Dases Lab be held liable, on any grounds whatsoever, particularly with regard to the presentation of the service offered by the User.</p>
                   <h4>Mise en relation</h4>
                    <p>Dases Lab offers a service to connect professional Users for the use of Resources. However:</p>
                      <ul>
                          <li>The drafting and conclusion of Contracts allowing the sharing of Data or the use of Services is not a service offered by Dases Lab. These are infrastructure services offered by Dases Lab Users. </li>
                          <li>The transfer of Data made available by the Provider User and used by the Purchaser User is not provided by Dases Lab but also by Infrastructure Services offered by Dases Lab Users.  </li>
                      </ul>
                     <p>In any event, the User acknowledges that he/she has verified the suitability of the Resources offered to his/her needs and has received all necessary information.</p>
                <hr/>
                <h2>Publishing information</h2>
                <h3>Publisher</h3>
                <p>Ministry of National Education, Youth and Sports<br />
                    Digital Education Department <br />
                    107 rue de Grenelle, 75007 Paris</p>
                <h3>Writing and contracting</h3>
                <p>The project management of the strategy and partnerships department coordinates the production process designed under the General Interest Entrepreneurship program. </p>
                <hr />
                <h2>Hosting</h2>
                <ul>
                    <li><strong>Interface (Front end)</strong> hosted by <a href="https://fleek.co/" target="_blank" rel="noopener noreferrer">Fleek</a>, réseau distribué IPFS</li>
                    <li><strong>Serveur (Back end)</strong>  This server has been deployed to allow for the verification of identities and the creation of these verifiable credentials as well as descriptions of the services to be added. This server is hosted by Heroku and can be accessed at this address : <a href="https://dases-proto.herokuapp.com" target="_blank" rel="noopener noreferrer">https://dases-proto.herokuapp.com</a></li>
                    <li><strong>Base de données</strong> hosted by <a href="https://www.mongodb.com/cloud/atlas/lp/" target="_blank" rel="noopener noreferrer">MongoDB</a> en Belgique. A terme, cette base de données est amenée à disparaitre pour permettre un fonctionnement décentralisé du Dases Lab.</li>
                </ul>
                <hr/>
                <h2>Liability</h2>
                <p>When the Dases Lab platform is likely to propose links to other sites: institutional sites, sites of associations, companies, these links are intended to allow users to access resources. </p>
                <p>As these sites are independent of the platform, neither the Dases Lab nor the director of publication/editing is responsible for the content of these sites.  </p>
                <p>Dases Lab makes no warranty as to the authenticity of the Resources, including those made available by API or any other means, this obligation being solely and exclusively the responsibility of the Provider User. In particular, Dases Lab shall not be liable in any way if it appears that the Data is not authentic, and/or infringes the rights of third parties and/or is infringing. </p>
                <p>Dases Lab is in no way responsible for the suitability of the Resources for the needs of the Users, and it is the responsibility of the Users to ensure the suitability of the Resources and the adequacy of the provisions of the applicable Agreement with respect to their needs and intended use. </p>
                <p>Finally, Dases Lab disclaims all liability with respect to the use of the Infrastructure Services and any other Services. Any dispute relating to a Contract or any relationship between Users shall be resolved solely between the Users, without Dases Lab taking part in it. </p>
                <hr/>
                <h2>Privacy</h2>
                <p>Dases Lab undertakes to keep confidential the information collected and refrains from communicating to any person other than at the request of a competent administrative or judicial authority, in accordance with applicable laws, information of any kind (commercial, technical...) that is communicated to it or of which Dases Lab has knowledge. </p>
                <hr/>
                <h2>Authorization to reproduce content</h2>
                <p>Any documents offered for download, unless otherwise specified, are made available under the terms of the <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License.</a></p>
                <p> For any other editorial or illustrative content (logos, pictograms, thumbnails, photographs) of the Dases Lab, any partial or complete copy must be requested, unless otherwise specified. This request must specify the content in question as well as the publication or site on which this element could appear. After authorization, the reproduction of the content must obey the following principles:</p>

                <ul>
                    <li>free broadcasting</li>
                    <li>respect for the integrity of the content reproduced</li>
                </ul>
                <p>The Dases Lab is a platform developed from open source technologies; you can find its source code on <a href="https://github.com/pgrandne/daseslab" target="_blank" rel="noopener noreferrer">https://github.com/pgrandne/daseslab</a>. Sa réutilisation est soumise au respect de la licence <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT</a>.</p>
                <hr />
                    
                <h2>Credits</h2>
                <p>Illustrations by <a href="https://icons8.com/illustrations/author/259416" target="_blank" rel="noopener noreferrer">Marina Green | Icons8 Illustrations</a> </p>
                <p>Icônes by <a href="Download 99,109 Streamline Icons (22+ free sets) (streamlinehq.com) " target="_blank">Streamline</a> </p>
                <hr />
                    
                <h2>Creation of hypertext links</h2>
                <p>Any website is authorized to set up a hypertext link to the contents of DasesLab. The explicit mention of the Dases Lab site in the title of the link is desired but not mandatory. </p>
                <hr /> 
                
                <h2>Personal data</h2>
                <p>The following terms have the meaning given to them by Regulation (EU) No. 2016/679 (hereinafter "GDPR"): Personal Data, Processing, Controller, Processor.</p>
                <h3>User's obligations </h3>
                <p>With respect to the Personal Data contained in the Resources, the Supplier User is and remains solely responsible for the processing until the conclusion of a Data Processing Agreement (DPA).</p>
                <p>Once in possession of the Data, the Acquiring User becomes in turn responsible for the processing.</p>
                <p>The User undertakes to comply with all laws and regulations relating to data processing, files and freedoms, and in particular to carry out all appropriate prior formalities with the competent local data protection authorities.</p>
                <p>The User undertakes to implement all technical and organizational measures necessary to allow access to the Resources only to persons registered as Users. </p>
                <p>The User Supplier declares on the Dases Lab, at the time of publication of its Resources and under its sole responsibility, the presence of Personal Data.  </p>
                <p>In case of omission of declaration by the User Provider, Dases Lab is not responsible for the visibility of the Personal Data in the Resource put online. </p>
                <h3>Dases Lab's obligations</h3>
                <p>Dases Lab offers a cataloguing and linking service for Users. However, the Resources, and in particular the Data contained in these Resources, are neither accessible nor used by Dases Lab.  </p>
                <h4>Users' Personal Data Processing</h4>
                <p>Dases Lab is responsible for processing Personal Data relating to Users and the manner in which such Data is processed is described below. </p>
                <hr/>
                    
                <h2>Privacy Policy</h2>
                <h3>Purposes of the processing</h3>
                <p>Dases Lab processes your Personal Data for the following purposes:</p>
                <ul>
                   <li>Creation and management of your User account.</li>
                   <li>Usability Testing" and "EdTech Survey" forms.</li>
               </ul>
               <hr/>
               <h3>Data processed</h3>
               <p>Dases Lab traite les Données personnelles suivantes:</p>
               <ul>
                    <li><strong>For the creation and management of your User account:</strong>
                          professional e-mail address, name, first name, company.</li>
                    <li><strong>For survey forms:</strong>
                          professional email address.</li>
               </ul>
               <p>The compulsory or optional nature of the data is indicated at the time of collection by an asterisk. No data is automatically collected as a result of your actions on the site because Dases Lab does not use any cookies.</p>
               <hr/>
               <h3>Legal basis for processing</h3>
               <p>The applicable legal bases are as follows:</p>
               <ul>
                   <li>Consent: you agree to the processing of your Personal Data through an express consent (check box, click...). You can withdraw this consent at any time.</li>
              </ul>
              <h3>Recipients</h3>
              <p>Only Dases Lab and the Users with whom you exchange your Data may have access to it. Furthermore, under no circumstances will your Personal Data be marketed. </p>
              <hr/>
                  
              <h3>Duration of storage</h3>
              <p>Dases Lab will retain your Personal Information for as long as necessary to fulfill the purpose(s) described above. </p>
              <hr/>
              
              <h3>Your rights</h3>
              <p>In accordance with the Regulations, you may exercise the following rights:</p>
              <ul>
                  <li><strong>Accès:</strong>: you can request information about the processing of your Personal Data, as well as a copy of it</li>
                  <li><strong>Rectification:</strong>: if you believe that your Personal Information is inaccurate or incomplete, you may request that your Personal Information be amended accordingly. </li>
                  <li><strong>Supression</strong>: you may request the deletion of your Personal Data, to the extent permitted by the Regulation. </li>
                  <li><strong>Limitation</strong>: you may request to limit the processing of your Personal Data.</li>
                  <li><strong>Opposition</strong>: you may object to the processing of your Personal Data.</li>
               </ul>
               <p>You also have the right to withdraw your consent at any time where the consent given serves as the legal basis for the relevant processing of your Personal Data. In these circumstances, the withdrawal of your consent will have the effect of discontinuing the relevant processing for the future but will not affect the lawfulness of the processing previously carried out.</p>
   
               <hr/>
               <h3>To come...</h3>
               <p>All the information entered in order to use Dases Lab (account creation etc...) will no longer be stored in a database but decentralized. Dases Lab will no longer process your personal data. </p>
               <hr/>
               
               <h2>Applicable law-Jurisdiction</h2>
               <p>The present terms and conditions are subject to French law. Any dispute relating to their interpretation and/or their execution will fall under the competence of the competent court in the jurisdiction of Paris. </p>
               <hr/>
               
               <h2>Definitions</h2>
               <h3>API</h3>
               <p>(Application Programming Interface)</p>
               <p>Means the interface through which a Purchaser User has access to Data made available by the Supplier User in real time. The data made available through the API may contain Personal Data, provided that the Supplier User expressly indicates this. </p>
               <hr/>
                   
               <h3>Decentralized Identity</h3>
               <p>Today's digital identity systems are numerous and usually centrally managed. Every website, social network or utility uses a user identification system. Identities are either managed on their own IT infrastructure or by a third party service. The data recorded by users is therefore multiplied in a multitude of databases.</p>
               <p>The concept of self-sovereign identity (SSI) is based on the model that each user has full control over their data. To this extent, he would have the right and power to decide when, how and with whom his information is shared. The idea is to have a decentralized system with no controlling body, where the user creates and manages his digital identity himself. The different services and applications must then connect to this system and ask for permission to access the users' identity.</p>
               <p>This paradigm shift allows users to share only the information they want, to choose when to revoke their access and to have real control over their data, without the need for a trusted third party.
This is also known as decentralized identity.</p>
               <hr/>
               <h3>Contract</h3>
               <p>Means the agreement defining the conditions of the relationship that will be established between the Supplier User and the Purchaser User to which Dases Lab is not a party and defining the conditions of exchange and use of the Data. </p>
               <hr/>
               <h3>Ressources</h3>
               <p>Refers indiscriminately to the Services and Data made available by the Users on the Dases Lab or shared from the Dases Lab.</p>
               <hr/>
               <h3>User</h3>
               <p>Refers to the User of the Dases Lab, acting as a professional, a legal entity under private or public law or an individual acting in a professional capacity, excluding persons acting as consumers. </p>
               <p>The legal entity User shall be represented by a natural person, duly authorized for the purpose hereof.</p>
               <p><b>User "Provider"</b> means the User uploading a Resource.</p>
               <p><b>User "Purchaser"</b> means the User wishing to use a Resource.</p>
               <hr/>
               <h3>Data</h3>
               <p>Refers indiscriminately to all Data exchanged on the Dases Lab between a Provider User and a Purchaser User, regardless of the Data transfer technology and the Contract used. </p>
               <p>This data may be::</p>
               <ul>
                   <li>Open" data whose access and use are left free and disseminated in a structured manner through an open license guaranteeing free access and reuse by all, without technical, legal or financial restrictions. </li>
                   <li>Non-open" data whose access and use is strictly controlled and limited by their owner. It can be:  </li>
               </ul>
               <ol>
                       <li>&gt;of personal data, requiring the implementation of a DPA (see: Definition - DPA).</li>
                       <li>&gt;data subject to other property rights (intellectual property...)</li>
               </ol>
               <hr/>
               <h3>Self-Description</h3>
               <p>Refers to the documentation in JSON-LD format presenting the characteristics of a Resource, a Service and describing their properties. </p>
               <hr/>
               <h3>Services</h3>
               <p>Refers to the services that Users can offer on the Dases Lab.</p>
               <p>Infrastructure services are also offered on the Dases Lab. These are services provided to meet general requirements, including technology and software solutions such as: interoperability services, security, data intermediation, network services...</p>
               <p>All these Services are provided by Dases Lab Users. The platform does not provide any service apart from the cataloguing and identity creation service. The platform only offers to put Suppliers and Buyers Users in contact with each other. </p>
               <hr/>
               <h3>DPA (Data Processing Agreement)</h3>
               <p>A data processing agreement is a legally binding contract that sets out the rights and obligations of each party regarding the protection of personal data. </p>
               <p>This contract constitutes an Infrastructure Service that can be offered by different Users.  </p>
                 
              
            </main>
        </div>
    )
}

export default MentionsEn;

