<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/password-reset.ftl" --revert
-->

<#import "template.ftl" as layout>
<@layout.emailLayout>
<img src="${url.resourcesUrl}/logo.png" width="100" height="100" alt="Logo FUN">
${kcSanitize(msg("passwordResetBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
</@layout.emailLayout>
