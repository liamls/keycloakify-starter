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
                    className="terms-accordion"
                    sx={{
                        background: "transparent",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        className="terms-accordion-header"
                        aria-controls="panel1-content"
                        id="panel1-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("shortTermsTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">
                            <h4 className="terms-subtitle">{msg("privacySummary_mainTitle")}</h4>
                            <span>{msg("privacySummary_rightsIntro")}</span>
                            <ul className="terms-list">
                                <li>{msg("privacySummary_rightsItem1")}</li>
                                <li>{msg("privacySummary_rightsItem2")}</li>
                            </ul>

                            <h4 className="terms-subtitle">{msg("privacySummary_dataHeldTitle")}</h4>
                            <ul className="terms-list">
                                <li>
                                    {msg("privacySummary_dataHeldItem1Title")}
                                    {msg("privacySummary_dataHeldItem1")}
                                </li>
                                <li>
                                    {msg("privacySummary_dataHeldItem2Title")}
                                    {msg("privacySummary_dataHeldItem2")}
                                </li>
                            </ul>

                            <h4 className="terms-subtitle">{msg("privacySummary_useTitle")}</h4>
                            <ul className="terms-list">
                                <li>{msg("privacySummary_useItem1")}</li>
                                <li>{msg("privacySummary_useItem2")}</li>
                                <li>{msg("privacySummary_useItem3")}</li>
                                <li>{msg("privacySummary_useItem4")}</li>
                                <li>{msg("privacySummary_useItem5")}</li>
                            </ul>

                            <h4 className="terms-subtitle">{msg("privacySummary_sharedTitle")}</h4>
                            <ul className="terms-list">
                                <li>{msg("privacySummary_sharedItem1")}</li>
                                <li>{msg("privacySummary_sharedItem2")}</li>
                                <li>{msg("privacySummary_sharedItem3")}</li>
                                <li>{msg("privacySummary_sharedItem4")}</li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className="terms-accordion"
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        className="terms-accordion-header"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("longTermsTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">
                            <div>
                                {msg("privacyFull_intro")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_introLink")}
                                </a>
                                {msg("privacyFull_introEnd")}
                            </div>

                            <h4 className="terms-subtitle">{msg("privacyFull_summaryTitle")}</h4>
                            <div>{msg("privacyFull_summaryText1")}</div>
                            <div>{msg("privacyFull_summaryText2")}</div>

                            <h4 className="terms-subtitle">{msg("privacyFull_detailTitle")}</h4>
                            <div>{msg("privacyFull_detailIntro")}</div>
                            <ul className="terms-list">
                                <li>{msg("privacyFull_detailItem1")}</li>
                                <li>
                                    {msg("privacyFull_detailItem2")}{" "}
                                    <a href={msgStr("zendeskUrl")} target="_blank" rel="noreferrer">
                                        {msg("privacyFull_detailItem2Link")}
                                    </a>
                                </li>
                                <li>{msg("privacyFull_detailItem3")}</li>
                                <li>{msg("privacyFull_detailItem4")}</li>
                                <li>
                                    <strong>{msg("privacyFull_detailItem5Title")}</strong>
                                    <ul className="terms-list">
                                        <li>{msg("privacyFull_detailItem5Sub1")}</li>
                                        <li>{msg("privacyFull_detailItem5Sub2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{msg("privacyFull_detailItem6Title")}</strong>
                                    <ul className="terms-list">
                                        <li>{msg("privacyFull_detailItem6Sub1")}</li>
                                        <li>{msg("privacyFull_detailItem6Sub2")}</li>
                                        <li>{msg("privacyFull_detailItem6Sub3")}</li>
                                        <li>{msg("privacyFull_detailItem6Sub4")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{msg("privacyFull_detailItem7Title")}</strong>
                                    <ul className="terms-list">
                                        <li>{msg("privacyFull_detailItem7Sub1")}</li>
                                        <li>{msg("privacyFull_detailItem7Sub2")}</li>
                                        <li>{msg("privacyFull_detailItem7Sub3")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{msg("privacyFull_detailItem8Title")}</strong>
                                    <ul className="terms-list">
                                        <li>{msg("privacyFull_detailItem8Sub1")}</li>
                                        <li>{msg("privacyFull_detailItem8Sub2")}</li>
                                    </ul>
                                </li>
                                <li>{msg("privacyFull_detailItem9")}</li>
                                <li>
                                    {msg("privacyFull_detailItem10")}{" "}
                                    <a href={msgStr("cnilMapUrl")} target="_blank" rel="noreferrer">
                                        {msg("privacyFull_detailItem10Link")}
                                    </a>{" "}
                                    {msg("privacyFull_detailItem10End")}
                                </li>
                                <li>{msg("privacyFull_detailItem11")}</li>
                                <li>
                                    {msg("privacyFull_detailItem12")}{" "}
                                    <a href={msgStr("zendeskUrl")} target="_blank" rel="noreferrer">
                                        {msg("privacyFull_detailItem12Link")}
                                    </a>
                                    {msg("privacyFull_detailItem12Mid")}{" "}
                                    <a href={msgStr("cnilComplaintUrl")} target="_blank" rel="noreferrer">
                                        {msg("privacyFull_detailItem12Link2")}
                                    </a>
                                </li>
                            </ul>

                            <h4 className="terms-subtitle">{msg("privacyFull_cookiesTitle")}</h4>
                            <div>
                                {msg("privacyFull_cookiesText1")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_cookiesLink")}
                                </a>
                                {msg("privacyFull_cookiesText2")}
                            </div>
                            <div>
                                {msg("privacyFull_cookiesText3")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_cookiesLink")}
                                </a>{" "}
                                {msg("privacyFull_cookiesText4")}
                            </div>
                            <div>
                                {msg("privacyFull_cookiesText5")}{" "}
                                <a href={msgStr("cnilUrl")} target="_blank" rel="noreferrer">
                                    www.cnil.fr
                                </a>
                                {msg("privacyFull_cookiesText6")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_cookiesLink")}
                                </a>{" "}
                                {msg("privacyFull_cookiesText7")}
                            </div>

                            <h4 className="terms-subtitle">{msg("privacyFull_externalTitle")}</h4>
                            <div>{msg("privacyFull_externalText")}</div>

                            <h4 className="terms-subtitle">{msg("privacyFull_usersTitle")}</h4>
                            <div>
                                {msg("privacyFull_usersText1")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_cookiesLink")}
                                </a>{" "}
                                {msg("privacyFull_usersText2")}{" "}
                                <a href={msgStr("funMoocUrl")} target="_blank" rel="noreferrer">
                                    {msg("privacyFull_cookiesLink")}
                                </a>
                                {msg("privacyFull_usersText3")}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className="terms-accordion"
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 1,
                        "&:before": { display: "none" }
                    }}
                >
                    <AccordionSummary
                        className="terms-accordion-header"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="termsTitle">{msg("usersPolicyTitle")}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="kc-terms-text">
                            <div>{msg("userPolicy_intro")}</div>

                            <h4 className="terms-subtitle">{msg("userPolicy_recommendationsTitle")}</h4>
                            <div>{msg("userPolicy_recommendationsIntro")}</div>
                            <ul className="terms-list">
                                <li>{msg("userPolicy_recommendationsItem1")}</li>
                                <li>{msg("userPolicy_recommendationsItem2")}</li>
                                <li>{msg("userPolicy_recommendationsItem3")}</li>
                                <li>{msg("userPolicy_recommendationsItem4")}</li>
                                <li>{msg("userPolicy_recommendationsItem5")}</li>
                            </ul>

                            <h4 className="terms-subtitle">{msg("userPolicy_commitmentsTitle")}</h4>
                            <div>{msg("userPolicy_commitmentsIntro")}</div>
                            <ul className="terms-list">
                                <li>{msg("userPolicy_commitmentsItem1")}</li>
                                <li>{msg("userPolicy_commitmentsItem2")}</li>
                                <li>{msg("userPolicy_commitmentsItem3")}</li>
                                <li>{msg("userPolicy_commitmentsItem4")}</li>
                                <li>{msg("userPolicy_commitmentsItem5")}</li>
                            </ul>

                            <div style={{ fontStyle: "italic" }}>{msg("userPolicy_note")}</div>
                        </div>
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
                    className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonLargeClass")}
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    value={msgStr("doDecline")}
                    disabled={isChecked}
                />
                <input
                    className={kcClsx("kcButtonClass", "kcButtonClass", "kcButtonClass", "kcButtonPrimaryClass", "kcButtonLargeClass")}
                    name="accept"
                    id="kc-accept"
                    type="submit"
                    value={msgStr("doAccept")}
                    disabled={!isChecked}
                />
            </form>
            <div className="clearfix" />
        </Template>
    );
}
