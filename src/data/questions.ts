import { PRACTICES } from "./questions-practices";
import { CONTENT } from "./questions-content";
import { AUTOMATION } from "./questions-automation";
import { DATA } from "./questions-data";
import { INSIGHTS } from "./questions-insights";

export type DomainId =
  | "practices"
  | "content"
  | "automation"
  | "data"
  | "insights";

export type Choice = { id: string; text: string };

export type Question = {
  id: string;
  domain: DomainId;
  prompt: string;
  choices: Choice[];
  /** One or more correct choice ids. */
  correct: string[];
  why: string;
};

export const DOMAINS: { id: DomainId; label: string; weight: string; blurb: string }[] = [
  {
    id: "practices",
    label: "Email marketing best practices",
    weight: "10%",
    blurb: "Deliverability, acquisition, and program design.",
  },
  {
    id: "content",
    label: "Content creation & delivery",
    weight: "24%",
    blurb: "Messages, personalization, and send configuration.",
  },
  {
    id: "automation",
    label: "Marketing automation",
    weight: "26%",
    blurb: "Journey Builder and Automation Studio.",
  },
  {
    id: "data",
    label: "Subscriber & data management",
    weight: "26%",
    blurb: "Lists, data extensions, imports, and keys.",
  },
  {
    id: "insights",
    label: "Insights & analytics",
    weight: "14%",
    blurb: "Reports, tracking, and Einstein insights.",
  },
];

const CORE_QUESTIONS: Question[] = [
  {
    id: "p1",
    domain: "practices",
    prompt:
      "Northline Outfitters wants new subscribers from social ads to receive email only after they explicitly request it. Which approach matches permission best practice?",
    choices: [
      { id: "a", text: "Import every ad clicker and send a welcome immediately" },
      { id: "b", text: "Send people to a hosted signup form and mail only confirmed opt-ins" },
      { id: "c", text: "Scrape public profile emails and add them to All Subscribers" },
      { id: "d", text: "Pre-check an opt-in box on the checkout page" },
    ],
    correct: ["b"],
    why: "Acquisition should be permission-based. A clear signup (ideally confirmed) is the compliant path. Purchased, scraped, or pre-checked consent is a deliverability and legal risk.",
  },
  {
    id: "p2",
    domain: "practices",
    prompt:
      "Open rates dropped after Northline increased daily promotional volume to the same audience. Which two practices help protect engagement and reputation? (Choose 2.)",
    choices: [
      { id: "a", text: "Set cadence expectations at signup and honor them" },
      { id: "b", text: "Send the same blast three times a day until opens recover" },
      { id: "c", text: "Use subscriber behavior to personalize relevance" },
      { id: "d", text: "Switch every subject line to all caps and multiple exclamation marks" },
    ],
    correct: ["a", "c"],
    why: "Expectation-setting plus relevant personalization reduce fatigue. More volume and spammy subject patterns usually worsen inbox placement and unsubscribes.",
  },
  {
    id: "p3",
    domain: "practices",
    prompt:
      "Complaint rates rose at one mailbox provider after a product launch. What is the appropriate short-term remediation?",
    choices: [
      { id: "a", text: "Double send volume so engaged users drown out complaints" },
      { id: "b", text: "Temporarily scale back volume to that ISP while you clean the audience" },
      { id: "c", text: "Remove the physical mailing address to shorten the footer" },
      { id: "d", text: "Disable all unsubscribe links for two weeks" },
    ],
    correct: ["b"],
    why: "When a specific ISP shows reputation trouble, throttle or pause that stream, remove unengaged and invalid addresses, then ramp carefully. Hiding unsub or the postal address violates commercial-email rules and hurts trust.",
  },
  {
    id: "p4",
    domain: "practices",
    prompt:
      "A commercial newsletter is missing an easy way to leave the list. Which requirement is not being met?",
    choices: [
      { id: "a", text: "A working unsubscribe mechanism in every commercial message" },
      { id: "b", text: "A dedicated sending IP address reserved for each journey or program" },
      { id: "c", text: "AMPscript personalization applied to the preheader of each message" },
      { id: "d", text: "Einstein Engagement Scoring enabled on every commercial send" },
    ],
    correct: ["a"],
    why: "Commercial email needs a clear, functional unsubscribe (and a valid physical address under CAN-SPAM-style rules). Dedicated IP and Einstein are optional capabilities, not the legal baseline.",
  },
  {
    id: "p5",
    domain: "practices",
    prompt:
      "Northline is warming a new dedicated IP and wants low-volume transactional mail on it first. Why start small and consistent?",
    choices: [
      { id: "a", text: "Mailbox providers build trust from steady, low-complaint history on a new IP" },
      { id: "b", text: "A new IP address can only be classified for transactional mail until it is 30 days old" },
      { id: "c", text: "Warm-up keeps open and click tracking disabled until the new IP has a reputation" },
      { id: "d", text: "Shared IP pools are technically unable to deliver any transactional messages" },
    ],
    correct: ["a"],
    why: "IP warm-up is a reputation ramp: predictable volume, clean lists, and strong engagement. Classification and tracking are not locked by age of the IP.",
  },
  {
    id: "p6",
    domain: "practices",
    prompt:
      "Which sending pattern is most likely to hurt deliverability for a promotional program?",
    choices: [
      { id: "a", text: "Segmenting by recent purchase and sending a relevant offer" },
      { id: "b", text: "Blasting the entire file, including 18-month inactives, every morning" },
      { id: "c", text: "Sunsetting subscribers who have not opened in a defined window" },
      { id: "d", text: "Authenticating the domain with SPF, DKIM, and DMARC" },
    ],
    correct: ["b"],
    why: "Mailing long-inactive contacts at high frequency drives complaints, spam-folder placement, and list decay. Sunset policies and authentication do the opposite.",
  },
  {
    id: "c1",
    domain: "content",
    prompt:
      "The monthly newsletter’s From Name must always be “Northline Field Notes” with a verified from-address. Where is that configured for sends?",
    choices: [
      { id: "a", text: "Sender profile" },
      { id: "b", text: "Delivery profile" },
      { id: "c", text: "Send classification only, with no sender profile" },
      { id: "d", text: "The data extension primary key" },
    ],
    correct: ["a"],
    why: "A sender profile holds From Name and From Email (and reply options). A delivery profile controls the IP, header, and footer used at delivery time.",
  },
  {
    id: "c2",
    domain: "content",
    prompt:
      "Northline wants transactional order mail on a different IP and footer than the weekly promo. Which object selects IP, header, and footer?",
    choices: [
      { id: "a", text: "Delivery profile" },
      { id: "b", text: "Publication list" },
      { id: "c", text: "Content block" },
      { id: "d", text: "Filter activity" },
    ],
    correct: ["a"],
    why: "Delivery profiles bind a send to a specific IP address (or pool) plus the header and footer content. Pair it with the right send classification (commercial vs transactional).",
  },
  {
    id: "c3",
    domain: "content",
    prompt:
      "An email repeats the same product URL three times. Analytics must show which placement was clicked. What should be added on each anchor?",
    choices: [
      { id: "a", text: "A unique alias (or link name) so tracking can tell the links apart" },
      { id: "b", text: "The same alias on every anchor, since the alias is a label for the destination URL" },
      { id: "c", text: "A Subscriber Key query string appended to each link so that web analytics can separate them" },
      { id: "d", text: "target=\"_blank\" on each anchor, which makes Marketing Cloud record each placement separately" },
    ],
    correct: ["a"],
    why: "Marketing Cloud tracks links by alias. Identical URLs collapse into one metric unless each <a> has a distinct alias.",
  },
  {
    id: "c4",
    domain: "content",
    prompt:
      "Dynamic AMPscript should be checked against a real subscriber before a journey send. Which feature does that?",
    choices: [
      { id: "a", text: "Preview and Test with a selected subscriber" },
      { id: "b", text: "A SQL Query activity that deletes the content" },
      { id: "c", text: "Einstein Messaging Insights only" },
      { id: "d", text: "File Transfer activity" },
    ],
    correct: ["a"],
    why: "Preview and Test renders personalization, AMPscript, and dynamic content for a chosen subscriber (and can send a test). It is the confidence check before production.",
  },
  {
    id: "c5",
    domain: "content",
    prompt:
      "Loyalty members should see a private offer block; everyone else sees the public block, chosen at send time from one email. What fits?",
    choices: [
      { id: "a", text: "Dynamic content rules driven by a profile or data-extension attribute" },
      { id: "b", text: "Two entirely separate sender profiles, one for loyalty members and one for everyone else" },
      { id: "c", text: "A suppression list containing all loyalty members so they do not see the public offer" },
      { id: "d", text: "A different Subscriber Key for each version of the message so each audience is tracked apart" },
    ],
    correct: ["a"],
    why: "Dynamic content swaps blocks inside one message using rules on attributes. Suppression would exclude people, not change creative.",
  },
  {
    id: "c6",
    domain: "content",
    prompt:
      "Brand needs every commercial email to start from an approved layout where the header cannot be edited by campaign builders. What should they use?",
    choices: [
      { id: "a", text: "A template with locked regions, then template-based emails" },
      { id: "b", text: "HTML paste with no template, trusting each user" },
      { id: "c", text: "A journey exit criterion" },
      { id: "d", text: "Import activity into a data extension" },
    ],
    correct: ["a"],
    why: "Content Builder templates can lock header, footer, and legal regions so only allowed slots are editable. That is how brand control scales.",
  },
  {
    id: "c7",
    domain: "content",
    prompt:
      "Creative must approve a message before it can be sent. Which capability supports that gate inside Content Builder?",
    choices: [
      { id: "a", text: "Approvals / approval workflow on the content" },
      { id: "b", text: "A data filter named Approved" },
      { id: "c", text: "Reply Mail Management auto-responders" },
      { id: "d", text: "Triggered send classification only" },
    ],
    correct: ["a"],
    why: "Content approvals stop unapproved assets from being used in sends. Data filters and RMM do not gate creative.",
  },
  {
    id: "c8",
    domain: "content",
    prompt:
      "Images in Content Builder are hard to find because many tags apply to each file. What reduces clutter while keeping hierarchy?",
    choices: [
      { id: "a", text: "Nested tags so broad categories contain specific ones" },
      { id: "b", text: "Put the full tag list into the Subscriber Key" },
      { id: "c", text: "Disable search in Content Builder" },
      { id: "d", text: "Store images only as email attachments" },
    ],
    correct: ["a"],
    why: "Nested tags create a hierarchy (for example Season > Winter > Jackets) so users can filter without applying a dozen flat tags.",
  },
  {
    id: "c9",
    domain: "content",
    prompt:
      "A single email should pick the hero image that has performed best for people like this subscriber. Which Einstein feature does that?",
    choices: [
      { id: "a", text: "Einstein Content Selection" },
      { id: "b", text: "Einstein Copy Insights" },
      { id: "c", text: "Einstein Messaging Insights" },
      { id: "d", text: "Einstein Engagement Frequency" },
    ],
    correct: ["a"],
    why: "Content Selection chooses among asset variants at open time based on engagement. Copy Insights studies subject-line language; Messaging Insights flags anomalies; Engagement Frequency suggests how often to mail.",
  },
  {
    id: "c10",
    domain: "content",
    prompt:
      "Northline wants each person to receive the weekly email when that person is most likely to open. Which feature applies?",
    choices: [
      { id: "a", text: "Einstein Send Time Optimization" },
      { id: "b", text: "A fixed Wait activity of 0 minutes" },
      { id: "c", text: "Sender Authentication Package" },
      { id: "d", text: "Import file naming pattern" },
    ],
    correct: ["a"],
    why: "Send Time Optimization shifts delivery into each subscriber’s predicted engagement window. It is not an authentication or import feature.",
  },
  {
    id: "c11",
    domain: "content",
    prompt:
      "Which preheader practice best supports the subject line on mobile?",
    choices: [
      { id: "a", text: "Use the preheader to add the detail the short subject could not fit" },
      { id: "b", text: "Repeat the subject line character for character" },
      { id: "c", text: "Leave it as “View this email in a browser” only, always" },
      { id: "d", text: "Fill it with the same word twenty times" },
    ],
    correct: ["a"],
    why: "Inbox clients show subject plus preview text together. Complementary preheader copy increases clarity; duplication and keyword stuffing waste the space.",
  },
  {
    id: "c12",
    domain: "content",
    prompt:
      "A send must be classified as transactional so it is not treated like a promotion for consent and frequency. Where is that declared?",
    choices: [
      { id: "a", text: "Send classification (transactional vs commercial), used with the send" },
      { id: "b", text: "The image alt text, which tells mailbox providers whether the message is a receipt" },
      { id: "c", text: "The data extension name prefix, because names beginning with Order are treated as transactional" },
      { id: "d", text: "The subject line alone, since CAN-SPAM no longer applies when it contains the word Order" },
    ],
    correct: ["a"],
    why: "Send classification tells Marketing Cloud whether the message is commercial or transactional, which affects footer behavior and how you should use consent. The subject line alone does not set it.",
  },
  {
    id: "a1",
    domain: "automation",
    prompt:
      "After a welcome email, the journey should continue only when the contact purchases on the website. Which journey activity fits?",
    choices: [
      { id: "a", text: "Wait Until Event (or a wait that listens for the purchase event)" },
      { id: "b", text: "Random Split, configured so that purchasers are routed down the first path" },
      { id: "c", text: "Update Contact, set to delete the contact key once the purchase is recorded" },
      { id: "d", text: "File Transfer, which waits for a purchase file to arrive from the website" },
    ],
    correct: ["a"],
    why: "Wait Until Event holds the contact until a defined engagement or API event (such as a purchase) occurs, or until a timeout path. A random split does not listen for behavior.",
  },
  {
    id: "a2",
    domain: "automation",
    prompt:
      "A journey sends up to three offers but must stop for a person as soon as they purchase, and still report who converted. What should Northline use?",
    choices: [
      { id: "a", text: "A goal (or exit) on the purchase event so converters leave, with goal reporting" },
      { id: "b", text: "Three separate one-off sends with no journey, each sent to people who have not purchased yet" },
      { id: "c", text: "A suppression of the entire audience before entry, then re-adding purchasers manually" },
      { id: "d", text: "Einstein Engagement Frequency turned off so converters are not counted in reporting" },
    ],
    correct: ["a"],
    why: "Journey goals track the desired outcome and can exit contacts who hit it, so later emails do not send. Reporting shows who met the goal.",
  },
  {
    id: "a3",
    domain: "automation",
    prompt:
      "Every email in a journey is preceded by a decision split whose only job is to drop people who already unsubscribed. How can the journey be simpler?",
    choices: [
      { id: "a", text: "Use exit criteria (or journey settings) so unsubscribed contacts leave automatically" },
      { id: "b", text: "Add another decision split before the first one so unsubscribed contacts are filtered twice" },
      { id: "c", text: "Change the entry mode to Re-entry anytime so unsubscribed contacts can leave and rejoin" },
      { id: "d", text: "Replace the email activities with SQL Query activities that exclude unsubscribed contacts" },
    ],
    correct: ["a"],
    why: "Exit criteria remove contacts when a condition becomes true, so you do not need a filter split before every message. Marketing Cloud also honors unsubscribe status at send time.",
  },
  {
    id: "a4",
    domain: "automation",
    prompt:
      "Contacts who already finished the onboarding journey must never enter it again. Which entry mode?",
    choices: [
      { id: "a", text: "No re-entry" },
      { id: "b", text: "Re-entry anytime" },
      { id: "c", text: "Re-entry only after exiting" },
      { id: "d", text: "Re-entry on every open" },
    ],
    correct: ["a"],
    why: "No re-entry admits a contact key once. Re-entry anytime allows another entry even if they are still in the journey. Re-entry after exiting allows a later entry once they have left.",
  },
  {
    id: "a5",
    domain: "automation",
    prompt:
      "Path A should go to people who clicked the last email; everyone else follows path B. Which split is built for that?",
    choices: [
      { id: "a", text: "Engagement Split" },
      { id: "b", text: "Random Split at 50/50" },
      { id: "c", text: "Einstein STO activity" },
      { id: "d", text: "Import activity" },
    ],
    correct: ["a"],
    why: "Engagement Split branches on opens or clicks of a prior message in the journey. Decision Split branches on attribute or data values, not on that message’s engagement.",
  },
  {
    id: "a6",
    domain: "automation",
    prompt:
      "A file of new leads lands on the enhanced FTP every weekday at 6 a.m. and must be imported, queried, then emailed. Which Automation Studio start is the best fit if the file name is the trigger?",
    choices: [
      { id: "a", text: "File Drop automation, then Import, Query, and Send Email activities" },
      { id: "b", text: "A journey Wait by Attribute of six hours, followed by a manual import each morning" },
      { id: "c", text: "A triggered send that reads the file directly from the Enhanced FTP when it lands" },
      { id: "d", text: "A manual send flow, with a marketer importing and mailing the file each morning" },
    ],
    correct: ["a"],
    why: "File Drop starts an automation when a file arrives. Import loads it, Query shapes the audience, and Send Email delivers. A schedule is an alternative if the file is already reliable at a clock time.",
  },
  {
    id: "a7",
    domain: "automation",
    prompt:
      "Northline must export tracking to an external S3 bucket every Monday. Which activities belong in the automation?",
    choices: [
      { id: "a", text: "Data Extract (or tracking extract) plus File Transfer" },
      { id: "b", text: "Only a Decision Split" },
      { id: "c", text: "Einstein Copy Insights dashboard export button" },
      { id: "d", text: "Sender profile update" },
    ],
    correct: ["a"],
    why: "Data Extract produces the file in the Safehouse; File Transfer moves it to the FTP or an external location. Journey splits do not move files.",
  },
  {
    id: "a8",
    domain: "automation",
    prompt:
      "An automation should not send if the import row count is unexpectedly tiny. What do you add?",
    choices: [
      { id: "a", text: "A Verification activity that stops the automation when the count is out of range" },
      { id: "b", text: "A Random Split that sends only half of the audience when the count looks low" },
      { id: "c", text: "More subject-line aliases, so a small audience still produces reportable link data" },
      { id: "d", text: "A second identical import with no check, which usually brings the count back in range" },
    ],
    correct: ["a"],
    why: "Verification activities assert conditions (for example row counts) and can halt the automation before a bad send.",
  },
  {
    id: "a9",
    domain: "automation",
    prompt:
      "A password-reset email must go within seconds of an API call, one person at a time. Which sending pattern fits?",
    choices: [
      { id: "a", text: "A triggered send (or transactional API send)" },
      { id: "b", text: "A weekly user-initiated send to All Subscribers" },
      { id: "c", text: "A file-drop of the full customer base" },
      { id: "d", text: "Einstein Content Selection with no API" },
    ],
    correct: ["a"],
    why: "Triggered and transactional sends are built for one-to-one, event-driven messages. Batch sends wait for an audience file or schedule.",
  },
  {
    id: "a10",
    domain: "automation",
    prompt:
      "Contacts should be measured as a group inside one journey rather than as unrelated batch sends, and a high unsubscribe day should raise an alert. Which Einstein feature watches that?",
    choices: [
      { id: "a", text: "Einstein Messaging Insights" },
      { id: "b", text: "Einstein Copy Insights" },
      { id: "c", text: "Einstein Recommendations catalog scenarios only" },
      { id: "d", text: "Nested content tags" },
    ],
    correct: ["a"],
    why: "Messaging Insights monitors opens, clicks, and unsubscribes on batch and journey sends and alerts when results are anomalously high or low versus expectation.",
  },
  {
    id: "a11",
    domain: "automation",
    prompt:
      "A journey email should not send to people Einstein believes are already saturated. Which feature evaluates how often to email?",
    choices: [
      { id: "a", text: "Einstein Engagement Frequency" },
      { id: "b", text: "Link alias" },
      { id: "c", text: "Delivery profile header" },
      { id: "d", text: "Primary key on a send log" },
    ],
    correct: ["a"],
    why: "Engagement Frequency estimates how saturated each contact is with your email so you can reduce or add sends. It is separate from content or link tracking.",
  },
  {
    id: "a12",
    domain: "automation",
    prompt:
      "SQL must build today’s audience from yesterday’s purchasers before the journey injection. Where does that SQL run?",
    choices: [
      { id: "a", text: "Query activity in Automation Studio" },
      { id: "b", text: "Inside the subject line" },
      { id: "c", text: "Sender profile" },
      { id: "d", text: "Preview and Test" },
    ],
    correct: ["a"],
    why: "Query activities run SQL against data extensions and data views and write a target data extension. Journeys can then use that data extension as an entry source.",
  },
  {
    id: "d1",
    domain: "data",
    prompt:
      "The same email address can belong to two different customers. What should be the Subscriber Key?",
    choices: [
      { id: "a", text: "A stable customer ID that is unique per person, not the email address" },
      { id: "b", text: "The subject line of the last email" },
      { id: "c", text: "The From Name" },
      { id: "d", text: "A new random GUID on every import of the same person" },
    ],
    correct: ["a"],
    why: "Subscriber Key is the person’s identity in Marketing Cloud. Email is a channel attribute and can change or be shared. Regenerating the key on each import splits history.",
  },
  {
    id: "d2",
    domain: "data",
    prompt:
      "Every sendable audience must relate back to the system of record for email status. Which list is that master subscriber store?",
    choices: [
      { id: "a", text: "All Subscribers" },
      { id: "b", text: "A publication list named Master" },
      { id: "c", text: "The _Click data view" },
      { id: "d", text: "A non-sendable data extension" },
    ],
    correct: ["a"],
    why: "All Subscribers holds the canonical subscriber status (active, unsubscribed, held, bounced). Publication lists manage preferences underneath that status.",
  },
  {
    id: "d3",
    domain: "data",
    prompt:
      "Customers may opt into Hiking News without leaving the main commercial program. What models that preference?",
    choices: [
      { id: "a", text: "A publication list for Hiking News" },
      { id: "b", text: "Deleting the subscriber from All Subscribers" },
      { id: "c", text: "A new business unit per newsletter" },
      { id: "d", text: "Turning off the Subscriber Key" },
    ],
    correct: ["a"],
    why: "Publication lists (used with the send) record opt-in or opt-out for a specific subscription while the subscriber can remain active overall.",
  },
  {
    id: "d4",
    domain: "data",
    prompt:
      "A regulatory request says certain addresses must never receive any email from this account. What do you use?",
    choices: [
      { id: "a", text: "An auto-suppression list (suppression list) applied to sends" },
      { id: "b", text: "A dynamic content block that still sends the email" },
      { id: "c", text: "A subject-line alias" },
      { id: "d", text: "Einstein Copy Insights filter" },
    ],
    correct: ["a"],
    why: "Suppression lists exclude addresses at send time. Auto-suppression can be account-wide so a person is not mailed even if they appear in the audience.",
  },
  {
    id: "d5",
    domain: "data",
    prompt:
      "A nightly CSV has one million rows. It must land in a data extension without a marketer pasting rows. What should run?",
    choices: [
      { id: "a", text: "An Import activity (or scheduled import) from the FTP file" },
      { id: "b", text: "Manual add-subscriber in the interface, one row at a time, by a marketer overnight" },
      { id: "c", text: "Preview and Test, which loads the file's rows into a data extension for review" },
      { id: "d", text: "An Engagement Split that routes the rows from the FTP into a data extension" },
    ],
    correct: ["a"],
    why: "Import activities map a file to a data extension at scale and belong in Automation Studio. The UI add flow is for tiny updates.",
  },
  {
    id: "d6",
    domain: "data",
    prompt:
      "Import should update attributes when the customer already exists and add them when they do not. Which import action?",
    choices: [
      { id: "a", text: "Add and update" },
      { id: "b", text: "Overwrite the entire data extension when you only meant to upsert" },
      { id: "c", text: "Skip all existing rows and also skip new rows" },
      { id: "d", text: "Update only, which creates brand-new customers" },
    ],
    correct: ["a"],
    why: "Add and update inserts new keys and refreshes matches. Overwrite replaces the whole table. Update-only does not create new records.",
  },
  {
    id: "d7",
    domain: "data",
    prompt:
      "Marketers need “purchased a tent in the last 7 days and not Silver status” without writing SQL. The source data extension already has those fields. What can they use?",
    choices: [
      { id: "a", text: "A data filter (filter activity) with AND criteria" },
      { id: "b", text: "A sender profile" },
      { id: "c", text: "Only the _Job data view, with no filter" },
      { id: "d", text: "Reply Mail Management" },
    ],
    correct: ["a"],
    why: "Data filters define drag-and-drop criteria against a data extension or attributes. Use SQL when you need joins, windows, or logic filters cannot express.",
  },
  {
    id: "d8",
    domain: "data",
    prompt:
      "A sendable data extension must relate to subscribers. Which setting is required?",
    choices: [
      { id: "a", text: "Sendable, with the relate-to-subscriber field mapped to Subscriber Key" },
      { id: "b", text: "Non-sendable, with the audience selected by a filter at send time" },
      { id: "c", text: "No primary key and duplicate email addresses in every row, matched on send" },
      { id: "d", text: "The field mapped to the image URL so each row relates to a content block" },
    ],
    correct: ["a"],
    why: "Sendable data extensions declare which column matches the subscriber (Subscriber Key or email, depending on the account). That relationship is what makes the audience mailable.",
  },
  {
    id: "d9",
    domain: "data",
    prompt:
      "Two imports of the same customer created two subscriber records because the key changed. What is the symptom in reporting?",
    choices: [
      { id: "a", text: "Engagement history is split across identities and preference status can diverge" },
      { id: "b", text: "The IP address is automatically re-warmed because the sending identity changed" },
      { id: "c", text: "All subject lines are rewritten by Einstein because the history looks incomplete" },
      { id: "d", text: "Templates unlock themselves because the subscriber appears to be a new contact" },
    ],
    correct: ["a"],
    why: "Subscriber Key is the join for status and history. Changing it treats the person as new, so unsubscribes and engagement no longer line up.",
  },
  {
    id: "d10",
    domain: "data",
    prompt:
      "A contact bounced as Held after repeated soft issues. What does that mean for future commercial sends?",
    choices: [
      { id: "a", text: "Marketing Cloud will not try to deliver to that subscriber until status is corrected" },
      { id: "b", text: "Held means they are the best target for a re-engagement blast to confirm the address" },
      { id: "c", text: "Held only affects push notifications, so email sends continue to the address as usual" },
      { id: "d", text: "The address is deleted from the FTP and from the data extension during the next import" },
    ],
    correct: ["a"],
    why: "Held (and undeliverable) status stops further delivery attempts so you do not keep mailing a bad address and damaging reputation.",
  },
  {
    id: "d11",
    domain: "data",
    prompt:
      "Child business units share people, and links must show which business unit sent the message. Which personalization string is appended as a parameter?",
    choices: [
      { id: "a", text: "The member ID / business unit identifier personalization string" },
      { id: "b", text: "The email preheader length, which shows the business unit in the inbox" },
      { id: "c", text: "A random alias that changes on every open so each business unit is tracked separately" },
      { id: "d", text: "The delivery profile footer HTML, which tells analytics which business unit sent the message" },
    ],
    correct: ["a"],
    why: "Personalization strings such as memberid identify the business unit on the send and can be passed on links for downstream analytics. Alias identifies the link, not the business unit.",
  },
  {
    id: "d12",
    domain: "data",
    prompt:
      "You need a relational store of orders (many rows per customer) that is not itself the email audience. How should it be built?",
    choices: [
      { id: "a", text: "A non-sendable data extension keyed by order ID, with customer ID to relate back" },
      { id: "b", text: "One column on All Subscribers called AllOrders pasted as text" },
      { id: "c", text: "A publication list per order" },
      { id: "d", text: "The subject line of a test send" },
    ],
    correct: ["a"],
    why: "Non-sendable data extensions hold relational data. Queries or filters join them to a sendable audience. Publication lists are preference lists, not order tables.",
  },
  {
    id: "i1",
    domain: "insights",
    prompt:
      "The marketer wants to review the tone of subject lines and how that tone related to engagement on recent sends. Which tool supplies that?",
    choices: [
      { id: "a", text: "Einstein Recommendations" },
      { id: "b", text: "Einstein Messaging Insights" },
      { id: "c", text: "Einstein Copy Insights" },
    ],
    correct: ["c"],
    why: "Copy Insights uses text analytics on subject lines: language factors, emotional tone, and phrases, each tied to engagement. Messaging Insights flags performance anomalies. Recommendations chooses products or content to suggest.",
  },
  {
    id: "i2",
    domain: "insights",
    prompt:
      "Monday’s journey open rate was far above the expected range and the notification badge lit up. Which feature produced that alert?",
    choices: [
      { id: "a", text: "Einstein Messaging Insights" },
      { id: "b", text: "Einstein Copy Insights subject-line tester only" },
      { id: "c", text: "A data filter" },
      { id: "d", text: "Sender Authentication Package" },
    ],
    correct: ["a"],
    why: "Messaging Insights compares engagement (opens, clicks, unsubscribes) to expected values and raises an insight when a batch or journey is anomalously high or low.",
  },
  {
    id: "i3",
    domain: "insights",
    prompt:
      "Northline wants subscribers grouped by likelihood to open, click, and unsubscribe before a win-back program. Which model?",
    choices: [
      { id: "a", text: "Einstein Engagement Scoring (personas such as Loyalists and Window Shoppers)" },
      { id: "b", text: "Einstein Content Tagging, which groups subscribers by the images they have opened" },
      { id: "c", text: "File naming conventions, which separate engaged and unengaged subscribers by name" },
      { id: "d", text: "A dynamic From Name that changes depending on the subscriber's likelihood to engage" },
    ],
    correct: ["a"],
    why: "Engagement Scoring predicts open, click, and unsubscribe likelihood and groups people into personas you can target differently.",
  },
  {
    id: "i4",
    domain: "insights",
    prompt:
      "A report should list people who were in the audience but did not receive the email. Which out-of-the-box option is the quick UI answer?",
    choices: [
      { id: "a", text: "Subscribers Not Sent To report" },
      { id: "b", text: "The image catalog" },
      { id: "c", text: "From Address Management" },
      { id: "d", text: "Template lock report" },
    ],
    correct: ["a"],
    why: "The Subscribers Not Sent To report (tracking) shows audience members excluded at send time and why. A Not Sent tracking extract is the file-based equivalent for automation.",
  },
  {
    id: "i5",
    domain: "insights",
    prompt:
      "An analyst needs SQL-level open and click facts for the last 30 days. Which objects are queried?",
    choices: [
      { id: "a", text: "Data views such as _Sent, _Open, _Click, _Bounce, and _Unsubscribe" },
      { id: "b", text: "Only the sender profile" },
      { id: "c", text: "The CAN-SPAM footer HTML" },
      { id: "d", text: "Einstein tone circles exported as a data extension automatically" },
    ],
    correct: ["a"],
    why: "System data views expose send and engagement facts for Query activities. They are the backbone of custom performance data extensions.",
  },
  {
    id: "i6",
    domain: "insights",
    prompt:
      "Leadership wants one screen of sends across business units for the past year with basic metrics, without a custom query. Which style of report fits?",
    choices: [
      { id: "a", text: "An account-level send summary / email performance report in Analytics Builder" },
      { id: "b", text: "A single subscriber's Preview and Test view, which summarizes sends for one person" },
      { id: "c", text: "The import error log, which lists every message sent through the import" },
      { id: "d", text: "Content Builder folder permissions, which show activity per business unit" },
    ],
    correct: ["a"],
    why: "Standard reports such as Account Send Summary and Email Performance Over Time aggregate sends and rates. Preview is a rendering tool, not a yearly inventory.",
  },
  {
    id: "i7",
    domain: "insights",
    prompt:
      "Unsubscribe reasons mention Reply Mail Management even though RMM is not enabled. What else writes those unsubscribes?",
    choices: [
      { id: "a", text: "The List-Unsubscribe header, which mailbox providers can turn into an unsubscribe" },
      { id: "b", text: "Einstein Copy Insights, which changes the footer when it detects low engagement" },
      { id: "c", text: "A non-sendable data extension, which records opt-outs from other systems" },
      { id: "d", text: "Locked template regions, which unsubscribe subscribers who do not open the email" },
    ],
    correct: ["a"],
    why: "Marketing Cloud can add a List-Unsubscribe header. Providers such as Gmail expose that as an unsubscribe control, so the reason can reference RMM-style unsub even when classic RMM is off.",
  },
  {
    id: "i8",
    domain: "insights",
    prompt:
      "Product recommendations in the email should be “people who bought this also bought.” Which capability is that?",
    choices: [
      { id: "a", text: "Einstein Recommendations (for example a Bought Bought scenario)" },
      { id: "b", text: "Einstein Copy Insights, which suggests items based on how similar subject lines performed" },
      { id: "c", text: "Einstein Messaging Insights, which recommends products after reviewing click rates" },
      { id: "d", text: "A publication list for each product, which groups subscribers who have bought them" },
    ],
    correct: ["a"],
    why: "Einstein Recommendations (email or web) uses catalog and behavior scenarios such as bought-bought or click-bought. It does not analyze subject-line tone or send anomalies.",
  },
  {
    id: "i9",
    domain: "insights",
    prompt:
      "Before a launch, the team wants a predicted engagement range for ten candidate subject lines. Where do they do that?",
    choices: [
      { id: "a", text: "The subject-line performance tester in Einstein Copy Insights" },
      { id: "b", text: "The delivery profile's IP warm-up chart, which scores subject lines for each IP" },
      { id: "c", text: "The All Subscribers status view, which predicts engagement from subject lines" },
      { id: "d", text: "A file drop directory listing, which stores past subject lines for comparison" },
    ],
    correct: ["a"],
    why: "Copy Insights includes a tester (when global models are enabled) that compares proposed subject lines with historical language and engagement. It is a planning tool, not a substitute for a live A/B test.",
  },
  {
    id: "i10",
    domain: "insights",
    prompt:
      "A tracking extract is required nightly for the data warehouse, not a one-off UI report. What produces the file?",
    choices: [
      { id: "a", text: "A tracking data extract in Automation Studio" },
      { id: "b", text: "Refreshing the browser on the overview dashboard" },
      { id: "c", text: "Editing the sender profile" },
      { id: "d", text: "Locking a template" },
    ],
    correct: ["a"],
    why: "Tracking extracts pull configurable send, open, click, bounce, and unsubscribe files on a schedule. Pair them with File Transfer if the warehouse sits outside Marketing Cloud.",
  },
];

export const QUESTIONS: Question[] = [
  ...CORE_QUESTIONS,
  ...PRACTICES,
  ...CONTENT,
  ...AUTOMATION,
  ...DATA,
  ...INSIGHTS,
];
