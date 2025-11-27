/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            contactSupport: "If you face any issues, contact the support.",
            zendesk: "ZenDesk Support",
            warningActivation: "The account database is being updated. If you already have a FUN account, you must reactivate it to keep it. Without reactivation, your account will be deactivated. If you have already completed this reactivation between XXXX and XXXX, you can ignore this message.",
        },
        fr: {
            contactSupport: "En cas de problème, contactez l’assistance technique.",
            zendesk: "Support ZenDesk",
            warningActivation:  "La base des comptes évolue. Si vous possédez déjà un compte FUN, vous devez le réactiver pour le conserver. Sans réactivation, votre compte sera désactivé. Si vous avez déjà procédé à cette réactivation entre le XXXX et le XXXX, vous pouvez ignorer ce message.",
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
