/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            newsletterInfo: "What we will send you:",
            newsletterInfoCheckbox1: "News about the FUN platform",
            newsletterInfoCheckbox2:
                "Information about the courses you want to follow or are following",
            subscribeNewsletter: "Discover the newsletters you can subscribe to by",
            newsletter: "clicking here.",
            newsletterUrl: "https://www.fun-mooc.fr/en/actualites/infolettres/",
            contactSupport: "If you face any issues,",
            zendesk: "contact the support.",
            zendeskUrl: "https://www.fun-mooc.help/hc/en-gb/requests/new",
            warningActivation:
                "The account database is being updated. If you already have a FUN account, you must reactivate it to keep it. Without reactivation, your account will be deactivated. If you have already completed this reactivation, you can ignore this message.",
            optionnalField: "optional",
            passwordInstruction1: "At least 14 characters",
            passwordInstruction2: "At least one uppercase letter",
            passwordInstruction3: "At least one lowercase letter",
            passwordInstruction4: "At least one digit",
            passwordInstruction5: "Au moins un caractère spécial",
            termsTitle: "Privacy Policy & TCs",
            shortTermsTitle: "Summary of our Privacy Policy",
            longTermsTitle: "Full Version of our Privacy Policy",
            usersPolicyTitle: "Users policy",
            usernameInstruction1Title: "Visible by everyone",
            usernameInstruction1:
                " : displayed publicly in any discussion or forum where you participate",
            usernameInstruction2Title: "Final",
            usernameInstruction2: " : cannot be changed later",
            usernameInstruction3Title: "Free and anonymous",
            usernameInstruction3: " : may not refer to your real identity",
            cguText1: "In order to create your account, ",
            cguText2: "please read and validate the terms and conditions.",
            cguLink: "https://www.fun-mooc.fr/en/general-terms-service/",
            privacySummary_mainTitle: "FUN processes your data",
            privacySummary_rightsIntro: "In accordance with GDPR, you can at any time:",
            privacySummary_rightsItem1:
                "Exercise your rights over your data (access, rectification, erasure, objection, withdrawal, limitation, portability)",
            privacySummary_rightsItem2:
                "Contact the Data Protection Officer (dpo@fun-mooc.fr)",
            privacySummary_dataHeldTitle: "The data we hold about you:",
            privacySummary_dataHeldItem1Title: "Identifying data",
            privacySummary_dataHeldItem1: " : username, full name, email address",
            privacySummary_dataHeldItem2Title: "Usage data",
            privacySummary_dataHeldItem2:
                " : IP address, site activity, page visit order, cookies…",
            privacySummary_useTitle: "Why is this data used?",
            privacySummary_useItem1: "For course registration and tracking",
            privacySummary_useItem2:
                "To ensure platform security and account safety",
            privacySummary_useItem3: "To communicate about FUN (newsletters, news…)",
            privacySummary_useItem4: "To improve courses",
            privacySummary_useItem5:
                "For research purposes by third parties (after pseudonymization)",
            privacySummary_sharedTitle: "Who your data is shared with:",
            privacySummary_sharedItem1: "FUN staff (authorized members)",
            privacySummary_sharedItem2:
                "Our subcontractors, for hosting, user support, and badge delivery notably (governed by contracts)",
            privacySummary_sharedItem3:
                "Course-producing institutions (authorized members)",
            privacySummary_sharedItem4:
                "Institutions selling professional training",
            privacyFull_intro:
                "The protection of your personal data (any information concerning you that you provide to us when using the ",
            privacyFull_introLink: "site",
            privacyFull_introEnd:
                ", for example when you create a user account, such as your name, your contact details, ...) is a priority for FUN. We therefore take all useful precautions to ensure that no unauthorized third party has access to it.",
            privacyFull_summaryTitle: "In summary:",
            privacyFull_summaryText1:
                "We only use your data for the sole operation of the platform and have no strategy aiming to reuse your data or to make any trade of it: thus, we never sell our learners' data, and never make them available to third parties except our service providers (unless otherwise to authorities or MOOC producing institutions -who do not have the right to reuse them without your agreement for other purposes-). Without activity on your part, we keep your identifying data for 5 years.",
            privacyFull_summaryText2:
                "Within the framework of our missions, among which the contribution to experimentation and the study of pedagogical practices, we can also give access to researchers to certain usage data of the platform: in this case, they are pseudonymized.",
            privacyFull_detailTitle: "In detail:",
            privacyFull_detailIntro:
                "By accessing or registering on this site, you consent and accept that the information collected concerning you, may be processed under the following conditions:",
            privacyFull_detailItem1:
                "the controller of personal data processing is the GIP France Université Numérique (FUN) (61 bis, rue de la Glacière, 75013 PARIS), represented by its Director Ollivier Haemmerlé;",
            privacyFull_detailItem2:
                "the Data Protection Officer (DPO) of the GIP can be contacted at this same address or via",
            privacyFull_detailItem2Link: "the contact form",
            privacyFull_detailItem3:
                "in case of academic cohort, the joint controller of data processing is the organization for which the course is instantiated, as soon as it contributes to determining the purposes and means of processing. An agreement has been concluded between FUN and this organization, which specifies the responsibilities of each (FUN being responsible for the operation of the platform and the choice of service providers, the organization for the usage of services);",
            privacyFull_detailItem4:
                "in the context of professional training, the controller is the training organization in the name and on behalf of which the training is instantiated and marketed on the platform.",
            privacyFull_detailItem5Title: "the personal data collected are as follows:",
            privacyFull_detailItem5Sub1:
                "identifying data (at least username, full name, email address);",
            privacyFull_detailItem5Sub2:
                "usage data, which concern your usage of the site services: it consists of raw data (IP address, operating system, site activity,...), corresponding to your use of the site functionalities (e.g. learners' learning modes, page visit order, user interface control,...).",
            privacyFull_detailItem6Title: "data collection is carried out in order to:",
            privacyFull_detailItem6Sub1:
                "allow access and registration to courses broadcast on the site, and send you information on the platform activity (updates on online courses offered by www.fun-mooc.fr or other events, to communicate on products or site services or affiliates, to send you emails about site maintenance);",
            privacyFull_detailItem6Sub2:
                "allow course tracking, participation in pedagogical activities and assessments, badge and/or certificate delivery as well as micro-certifications;",
            privacyFull_detailItem6Sub3:
                "conduct research work to carry out statistical studies, after pseudonymization, in particular in the fields of cognitive sciences and education;",
            privacyFull_detailItem6Sub4:
                "register the course as part of a wider training delivered by the Higher Education and Research establishment.",
            privacyFull_detailItem7Title: "incidentally, usage data can be used:",
            privacyFull_detailItem7Sub1:
                "to allow institutions to propose, administer and improve their courses;",
            privacyFull_detailItem7Sub2:
                "to monitor attendance, progress and completion of an online course and to analyze statistics on learners' performance and how they learn;",
            privacyFull_detailItem7Sub3:
                "to detect violations of the user charter, the way of using the site as well as fraudulent uses or potentially so, maintain and improve the operation and security of the site and our software, systems and networks.",
            privacyFull_detailItem8Title: "pseudonymized, they can be used:",
            privacyFull_detailItem8Sub1:
                "to help improve the www.fun-mooc.fr offer globally, personalize the experience and evaluate the accessibility and impact of www.fun-mooc.fr in the international educational community;",
            privacyFull_detailItem8Sub2:
                "to publish information, always pseudonymized, collected on access, use, impact and learner performance.",
            privacyFull_detailItem9:
                "the recipients of identifying data are FUN, as well as, for the only data necessary for their activity, its subcontractors (for hosting, user support and badge delivery notably) whose activity is governed by contracts, and course producing and/or selling institutions or professional training (authorized members of pedagogical teams, training manager, official representatives of course carrying institutions, and actors of data exploitation, to accelerate the digital transformation of initial training). Note, incidentally, that your own activity is likely to transmit data to other learners, if you share for example personal information in the context of a course.",
            privacyFull_detailItem10:
                "thus, when you take a MOOC whose carrying institution is located in a",
            privacyFull_detailItem10Link: "non-adequate country",
            privacyFull_detailItem10End:
                "(e.g. Morocco, Tunisia and Lebanon), and in the absence of an adequacy decision, a processing of your data can be carried out there; standard contractual clauses of the European Commission, of which you can obtain a copy, are signed with said institutions.",
            privacyFull_detailItem11:
                "your data are kept for a maximum duration of five years after your last activity on the site, then will be anonymized. In case of remote exam monitoring, data transmitted to the subcontractor are kept for a period of six weeks (for video, photo and audio recordings) to one year for identification and contact data, before destruction.",
            privacyFull_detailItem12:
                "you have the right to withdraw your consent to the processing of your data by",
            privacyFull_detailItem12Link: "contacting us",
            privacyFull_detailItem12Mid:
                ". You also have the right to ask us for access to your data, their rectification or erasure, as well as a limitation of these data, or their portability. You have the right to define specific guidelines regarding the retention, erasure, and communication of your data after your death. You also have the right to",
            privacyFull_detailItem12Link2: "lodge a complaint with the CNIL",
            privacyFull_cookiesTitle: "Cookie Usage",
            privacyFull_cookiesText1:
                "Some information is collected by means of cookies (small text files placed on your computer that store information about you and that can be accessed by the",
            privacyFull_cookiesLink: "site",
            privacyFull_cookiesText2: ").",
            privacyFull_cookiesText3:
                "A cookie does not allow us to identify you. Generally, it records information relating to the navigation of your computer on our",
            privacyFull_cookiesText4:
                "(the pages you consulted, the date and time of the consultation, etc.) that we will be able to read during your subsequent visits. In this case, it contains the information you provided. Thus, you will not need, during your next visit, to fill in the form we proposed to you again.",
            privacyFull_cookiesText5:
                "We inform you that you can oppose the recording of cookies by configuring your browser (in the \"tools options\" menu of Mozilla Firefox, Google Chrome or Microsoft Edge). Most browsers provide instructions to refuse them in the \"Help\" section of the toolbar. The configuration of the navigation software allows to inform of the presence of cookie(s) and possibly to refuse it in the manner described at the following address:",
            privacyFull_cookiesText6:
                ". If you refuse our cookies, functions and functionalities of this",
            privacyFull_cookiesText7: "could not work properly.",
            privacyFull_externalTitle: "External Services",
            privacyFull_externalText:
                "The site www.fun-mooc.fr can give access to links to other sites published by other content providers. These other sites are not under our control, and you acknowledge and accept that we are not responsible for the collection and use of your information by these sites. We encourage you to read the privacy policies of each site you visit and use.",
            privacyFull_usersTitle: "Usernames and posts",
            privacyFull_usersText1:
                "Comments and other information you publish in our forums, wikis or other areas of the",
            privacyFull_usersText2:
                "designed for public communications, can be viewed and downloaded by other visitors of the",
            privacyFull_usersText3:
                ". For this reason, we encourage you to exercise discretion before publishing any information that could be used to identify you on these forums or other public places or reserved for a course."
        },
        fr: {
            newsletterInfo: "Ce que nous vous enverrons :",
            newsletterInfoCheckbox1: "Des nouvelles concernant la plateforme FUN",
            newsletterInfoCheckbox2:
                "Les informations concernant les cours que vous voulez suivre ou que vous suivez",
            subscribeNewsletter:
                "Découvrez les infolettres auxquelles vous pouvez vous inscrire en",
            newsletter: "cliquant ici.",
            newsletterUrl: "https://www.fun-mooc.fr/fr/actualites/infolettres/",
            contactSupport: "En cas de problème,",
            zendesk: "contactez l’assistance technique.",
            zendeskUrl: "https://www.fun-mooc.help/hc/fr/requests/new",
            warningActivation:
                "La base des comptes évolue. Si vous possédez déjà un compte FUN, vous devez le réactiver pour le conserver. Sans réactivation, votre compte sera désactivé. Si vous avez déjà procédé à cette réactivation, vous pouvez ignorer ce message.",
            optionnalField: "optionnel",
            passwordInstruction1: "Au moins 14 caractères",
            passwordInstruction2: "Au moins une lettre majuscule",
            passwordInstruction3: "Au moins une lettre minuscule",
            passwordInstruction4: "Au moins un chiffre",
            passwordInstruction5: "Au moins un caractère spécial",
            termsTitle: "Politique de confidentialité & CGU",
            shortTermsTitle: "Résumé de notre politique de confidentialité",
            longTermsTitle: "Version complète de notre politique de confidentialité",
            usersPolicyTitle: "Charte utilisateurs",
            usernameInstruction1Title: "Visible par tous",
            usernameInstruction1:
                " : s'affichera publiquement dans toute discussion ou forum où vous participerez",
            usernameInstruction2Title: "Définitif",
            usernameInstruction2: " : ne pourra pas être modifié ultérieurement",
            usernameInstruction3Title: "Libre et anonyme",
            usernameInstruction3:
                " : peut ne pas faire référence à votre identité réelle",
            cguText1: "Afin de finaliser la création de votre compte, ",
            cguText2: "veuillez lire et accepter les CGU",
            cguLink: "https://www.fun-mooc.fr/fr/cgu/",
            privacySummary_mainTitle: "FUN traite vos données",
            privacySummary_rightsIntro:
                "Conformément au RGPD, vous pouvez à tout instant :",
            privacySummary_rightsItem1:
                "Exercer vos droits sur vos données (accès, rectification, effacement, opposition, retrait, limitation, portabilité)",
            privacySummary_rightsItem2:
                "Contacter le délégué à la protection des données (dpo@fun-mooc.fr)",
            privacySummary_dataHeldTitle: "Les données que nous avons sur vous :",
            privacySummary_dataHeldItem1Title: "Des données identifiantes",
            privacySummary_dataHeldItem1:
                " : nom d’utilisateur, nom complet, adresse électronique",
            privacySummary_dataHeldItem2Title: "Des données d’usage",
            privacySummary_dataHeldItem2:
                " : Adresse IP, activité sur le site, ordre des pages visitées, cookies …",
            privacySummary_useTitle: "Pourquoi ces données sont-elles utilisées ?",
            privacySummary_useItem1: "Pour l’inscription et le suivi des cours",
            privacySummary_useItem2:
                "Pour garantir la sécurité de la plateforme et la sureté de votre compte",
            privacySummary_useItem3:
                "Pour communiquer sur FUN (infolettres, actualités, …)",
            privacySummary_useItem4: "Pour l’amélioration des cours",
            privacySummary_useItem5:
                "Pour la réalisation de travaux de recherche par des tiers (après pseudonymisation)",
            privacySummary_sharedTitle: "Ceux avec qui les données sont partagées :",
            privacySummary_sharedItem1: "Le personnel de FUN (membres habilités)",
            privacySummary_sharedItem2:
                "Nos sous-traitants, pour l’hébergement, le support utilisateur et la délivrance de badges notamment (encadrés par des contrats)",
            privacySummary_sharedItem3:
                "Les établissements producteurs de cours (membres habilités)",
            privacySummary_sharedItem4:
                "Les établissements vendeurs de formations professionnelles",
            privacyFull_intro:
                "La protection de vos données à caractère personnel (toute information vous concernant que vous nous fournissez lors de l'utilisation du",
            privacyFull_introLink: "site",
            privacyFull_introEnd:
                ", par exemple lorsque vous créez un compte utilisateur, comme votre nom, vos coordonnées, …) est une priorité de FUN. Nous prenons donc toutes précautions utiles pour garantir qu’aucun tiers non-autorisé n’y ait accès.",
            privacyFull_summaryTitle: "En synthèse :",
            privacyFull_summaryText1:
                "Nous n’utilisons vos données que pour l’unique fonctionnement de la plateforme et n’avons aucune stratégie visant à réutiliser vos données ou à en faire un commerce quelconque : ainsi, nous ne vendons en aucun cas les données de nos apprenants, et ne les mettons jamais à disposition de tiers hormis nos prestataires (sauf le cas échéant aux autorités ou aux établissements produisant les MOOC -qui n’ont pas le droit de les réutiliser sans votre accord pour d’autres finalités-). Sans activité de votre part, nous supprimons vos données identifiantes après 5 ans.",
            privacyFull_summaryText2:
                "Dans le cadre de nos missions, parmi lesquelles la contribution à l’expérimentation et l’étude des pratiques pédagogiques, nous pouvons également donner accès à des chercheurs à certaines données d’usage de la plateforme : dans ce cas, celles-ci sont pseudonymisées.",
            privacyFull_detailTitle: "En détail :",
            privacyFull_detailIntro:
                "En accédant ou en vous inscrivant sur ce site, vous consentez et acceptez le fait que les informations collectées vous concernant, puissent être traitées dans les conditions suivantes :",
            privacyFull_detailItem1:
                "le responsable du traitement des données à caractère personnel est le GIP France Université Numérique (FUN) (61 bis, rue de la Glacière, 75013 PARIS), représenté par son Directeur Ollivier Haemmerlé ;",
            privacyFull_detailItem2:
                "le délégué à la protection des données (DPO) du GIP peut être contacté à cette même adresse ou via",
            privacyFull_detailItem2Link: "le formulaire de contact",
            privacyFull_detailItem3:
                "en cas de cohorte académique, le co-responsable du traitement de données est l’organisme pour lequel le cours est instancié, dès lors qu’il concourt à déterminer les finalités et moyens du traitement. Un accord a été conclu entre FUN et cet organisme, qui précise les responsabilités de chacun (FUN étant responsable du fonctionnement de la plateforme et du choix de prestataires, l’organisme de l’usage des services) ;",
            privacyFull_detailItem4:
                "dans le cadre des formations professionnelles, le responsable du traitement est l’organisme de formation au nom et pour le compte duquel la formation est instanciée et commercialisée sur la plateforme.",
            privacyFull_detailItem5Title:
                "les données à caractère personnel collectées sont les suivantes :",
            privacyFull_detailItem5Sub1:
                "données identifiantes (a minima nom d’utilisateur, nom complet, adresse électronique) ;",
            privacyFull_detailItem5Sub2:
                "données d’usage, qui concernent votre usage des services du site : il s’agit de données brutes (adresse IP, système d’exploitation, activité sur le site,…), correspondant à votre utilisation des fonctionnalités du site (par ex. modes d’apprentissage des apprenants, ordre des pages visitées, contrôle de l’interface utilisateur,…).",
            privacyFull_detailItem6Title: "la collecte des données est réalisée afin :",
            privacyFull_detailItem6Sub1:
                "de permettre l’accès et l’inscription aux cours diffusés sur le site, et vous adresser des informations sur l’activité de la plateforme (mises à jour sur les cours en ligne offerts par www.fun-mooc.fr ou d'autres événements, pour communiquer sur les produits ou les services du site ou affiliés, pour vous envoyer des messages électroniques à propos de la maintenance du site) ;",
            privacyFull_detailItem6Sub2:
                "de permettre le suivi des cours, la participation aux activités pédagogiques et aux évaluations, la délivrance de badges et/ou de certificats ainsi que de micro-certifications ;",
            privacyFull_detailItem6Sub3:
                "d’effectuer des travaux de recherche pour réaliser des études statistiques, après pseudonymisation, en particulier dans les domaines des sciences cognitives et de l'éducation ;",
            privacyFull_detailItem6Sub4:
                "d’inscrire le cours dans le cadre d’une formation plus large délivrée par l’établissement de l’Enseignement Supérieur et de la Recherche.",
            privacyFull_detailItem7Title:
                "de façon accessoire, les données d’usage peuvent être utilisées :",
            privacyFull_detailItem7Sub1:
                "pour permettre aux établissements de proposer, administrer et améliorer leurs cours ;",
            privacyFull_detailItem7Sub2:
                "pour suivre la fréquentation, la progression et l'achèvement d'un cours en ligne et pour analyser les statistiques sur la performance des apprenants et la façon dont ils apprennent ;",
            privacyFull_detailItem7Sub3:
                "pour détecter des violations de la charte utilisateur, la manière d’utiliser le site ainsi que des utilisations frauduleuses ou l'étant potentiellement, maintenir et d'améliorer le fonctionnement et la sécurité du site et de nos logiciels, systèmes et réseaux.",
            privacyFull_detailItem8Title: "pseudonymisées, elles peuvent être utilisées :",
            privacyFull_detailItem8Sub1:
                "pour aider à l’amélioration de l'offre de www.fun-mooc.fr de manière globale, personnaliser l'expérience et évaluer l'accessibilité et l'impact de www.fun-mooc.fr dans la communauté éducative internationale ;",
            privacyFull_detailItem8Sub2:
                "pour publier des informations, toujours pseudonymisées, recueillies sur les accès, l'utilisation, l'impact et la performance des apprenants.",
            privacyFull_detailItem9:
                "les destinataires des données identifiantes sont FUN, ainsi que, pour les seules données nécessaires à leur activité, ses sous-traitants (pour l’hébergement, le support utilisateur et la délivrance de badges notamment) dont l’activité est encadrée par des contrats, et les établissements producteurs et/ou vendeurs des cours ou formations professionnelles (membres habilités des équipes pédagogiques, responsable de la formation, représentants officiels des établissements porteurs des cours, et acteurs de l'exploitation des données, pour accélérer la transformation numérique des formations initiales). Notez, accessoirement, que votre propre activité est susceptible de transmettre des données à d’autres apprenants, si vous partagez par exemple des informations personnelles dans le cadre d’un cours.",
            privacyFull_detailItem10:
                "ainsi, lorsque vous suivez un MOOC dont l’établissement porteur est situé dans un",
            privacyFull_detailItem10Link: "pays non-adéquat",
            privacyFull_detailItem10End:
                "(par ex. Maroc, Tunisie et Liban), et en l’absence de décision d’adéquation, un traitement de vos données peut y être réalisé ; des clauses contractuelles de la Commission européenne, dont vous pouvez obtenir copie, sont signées avec lesdits établissements.",
            privacyFull_detailItem11:
                "vos données sont conservées pour une durée maximale de cinq ans à l’issue de votre dernière activité sur le site, puis seront anonymisées. En cas de surveillance d’examen à distance, les données transmises au sous-traitant sont conservées pour une durée de six semaines (pour les enregistrements vidéo, photo et audio) à un an pour les données d’identification et coordonnées, avant destruction.",
            privacyFull_detailItem12:
                "vous avez le droit de retirer votre consentement au traitement de vos données en",
            privacyFull_detailItem12Link: "nous contactant",
            privacyFull_detailItem12Mid:
                ". Vous avez également le droit de nous demander l’accès à vos données, leur rectification ou effacement, ainsi qu’une limitation de ces données, ou leur portabilité. Vous avez le droit de définir des directives particulières quant à la conservation, l’effacement, et la communication de vos données après votre décès. Vous avez également le droit d’",
            privacyFull_detailItem12Link2: "adresser une réclamation à la CNIL",
            privacyFull_cookiesTitle: "Utilisations de Cookies",
            privacyFull_cookiesText1:
                "Certaines informations sont collectées au moyen de cookies (de petits fichiers texte placés sur votre ordinateur qui stockent des informations vous concernant et qui peuvent être consultés par le",
            privacyFull_cookiesLink: "site",
            privacyFull_cookiesText2: ").",
            privacyFull_cookiesText3:
                "Un cookie ne nous permet pas de vous identifier. De manière générale, il enregistre des informations relatives à la navigation de votre ordinateur sur notre",
            privacyFull_cookiesText4:
                "(les pages que vous avez consultées, la date et l’heure de la consultation, etc.) que nous pourrons lire lors de vos visites ultérieures. En l’espèce, il contient les informations que vous avez fournies. Ainsi, vous n’aurez pas besoin, lors de votre prochaine visite de remplir à nouveau le formulaire que nous vous avons proposé.",
            privacyFull_cookiesText5:
                "Nous vous informons que vous pouvez vous opposer à l’enregistrement de cookies en configurant votre navigateur (dans le menu « outil options » de Mozilla Firefox, Google Chrome ou Microsoft Edge). La plupart des navigateurs fournissent les instructions pour les refuser dans la section « Aide » de la barre d'outils. Le paramétrage du logiciel de navigation permet d'informer de la présence de cookie(s) et éventuellement de la refuser de la manière décrite à l'adresse suivante :",
            privacyFull_cookiesText6:
                ". Si vous refusez nos cookies, des fonctions et fonctionnalités de ce",
            privacyFull_cookiesText7: "pourraient ne pas fonctionner correctement.",
            privacyFull_externalTitle: "Services externes",
            privacyFull_externalText:
                "Le site www.fun-mooc.fr peut donner accès à des liens vers d'autres sites publiés par d'autres fournisseurs de contenu. Ces autres sites ne sont pas sous notre contrôle, et vous reconnaissez et acceptez que nous ne sommes pas responsables de la collecte et de l'utilisation de vos informations par ces sites. Nous vous encourageons à lire les politiques de confidentialité de chaque site que vous visitez et utilisez.",
            privacyFull_usersTitle: "Noms d'utilisateurs et messages",
            privacyFull_usersText1:
                "Les commentaires et autres informations que vous publiez dans nos forums, wikis ou d'autres zones du",
            privacyFull_usersText2:
                "conçus pour les communications publiques, peuvent être consultés et téléchargés par d'autres visiteurs du",
            privacyFull_usersText3:
                ". Pour cette raison, nous vous encourageons à faire preuve de discrétion avant de publier toute information qui pourrait être utilisée pour vous identifier sur ces forums ou d’autres endroits publics ou réservés à un cours."
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
