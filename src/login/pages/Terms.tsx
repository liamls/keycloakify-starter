import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const { url } = kcContext;

    const [isChecked, setIsChecked] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={msg("termsTitle")}
        >
            <div className="accordions">
                <Accordion
                    defaultExpanded
                    sx={{
                        background: "transparent",
                        border: "3px solid #ceddff",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        sx={{ backgroundColor: "#ceddff" }}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("shortTermsTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">{msg("termsText")}</div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: "transparent",
                        border: "3px solid #ceddff",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        sx={{ backgroundColor: "#ceddff" }}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("longTermsTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">{msg("termsText")}</div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: "transparent",
                        border: "3px solid #ceddff",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        sx={{ backgroundColor: "#ceddff" }}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("usersPolicyTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">{msg("termsText")}</div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="cguCheckbox">
                <input id="checkboxCgu" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <label htmlFor="checkboxCgu">
                    {msg("cguText1")}
                    <a href={msgStr("cguLink")} target="_blank" rel="noreferrer">
                        {msg("cguText2")}
                    </a>
                </label>
            </div>
            <form className="form-actions" action={url.loginAction} method="POST">
                <input
                    className={kcClsx("kcButtonClass", "kcButtonClass", "kcButtonClass", "kcButtonPrimaryClass", "kcButtonLargeClass")}
                    name="accept"
                    id="kc-accept"
                    type="submit"
                    value={msgStr("doAccept")}
                    disabled={!isChecked}
                />
                <input
                    className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonLargeClass")}
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    value={msgStr("doDecline")}
                    disabled={isChecked}
                />
            </form>
            <div className="clearfix" />
        </Template>
    );
}
