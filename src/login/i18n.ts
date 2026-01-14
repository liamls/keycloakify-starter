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
                "Institutions selling professional training"
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
                "Les établissements vendeurs de formations professionnelles"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
