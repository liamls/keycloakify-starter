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
                "The account database is being updated. If you already have a FUN account, you must reactivate it to keep it. Without reactivation, your account will be deactivated. If you have already completed this reactivation between XXXX and XXXX, you can ignore this message.",
            optionnalField: "optional",
            passwordInstruction1: "At least 14 characters",
            passwordInstruction2: "At least one uppercase letter",
            passwordInstruction3: "At least one lowercase letter",
            passwordInstruction4: "At least one digit",
            passwordInstruction5: "Au moins un caractère spécial",
            termsTitle: "Privacy Policy & TCs",
            shortTermsTitle: "Summary of our Privacy Policy",
            longTermsTitle: "Full Version of our Privacy Policy",
            cguTitle: "Terms and Conditions",
            usernameInstruction1:
                "Public username used across FUN applications. Please avoid any personal information.",
            cguText1: "In order to create your account, ",
            cguText2: "please read and validate the terms and conditions.",
            cguLink: "https://google.fr/"
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
                "La base des comptes évolue. Si vous possédez déjà un compte FUN, vous devez le réactiver pour le conserver. Sans réactivation, votre compte sera désactivé. Si vous avez déjà procédé à cette réactivation entre le XXXX et le XXXX, vous pouvez ignorer ce message.",
            optionnalField: "optionnel",
            passwordInstruction1: "Au moins 14 caractères",
            passwordInstruction2: "Au moins une lettre majuscule",
            passwordInstruction3: "Au moins une lettre minuscule",
            passwordInstruction4: "Au moins un chiffre",
            passwordInstruction5: "Au moins un caractère spécial",
            termsTitle: "Politique de confidentialité & CGU",
            shortTermsTitle: "Résumé de notre politique de confidentialité",
            longTermsTitle: "Version complète de notre politique de confidentialité",
            cguTitle: "Conditions Générales d'Utilisation",
            usernameInstruction1:
                "Identifiant public utilisé sur les applications FUN. Évitez toute information personnelle.",
            cguText1: "Afin de finaliser la création de votre compte, ",
            cguText2: "veuillez lire et accepter les CGU",
            cguLink: "https://google.fr/"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
