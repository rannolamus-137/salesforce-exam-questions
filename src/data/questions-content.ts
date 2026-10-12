import type { Question } from "./questions";

export const CONTENT: Question[] = [
  {
    id: "c13",
    domain: "content",
    prompt:
      "A retailer stores each customer's loyalty tier in a data extension named Loyalty (key: SubscriberKey, columns: Tier, Points). The email is sent to a different sendable data extension that does not contain Tier. The marketer wants the email to greet each person with their tier. What should be used in the email?",
    choices: [
      { id: "a", text: "An AMPscript Lookup() call against the Loyalty data extension using the subscriber's key" },
      { id: "b", text: "A personalization string %%Tier%% placed in the content, because every data extension is available to every send" },
      { id: "c", text: "A second email sent to the Loyalty data extension containing the greeting" },
      { id: "d", text: "A publication list for each tier" },
    ],
    correct: ["a"],
    why: "Personalization strings only resolve attributes from the send audience and the subscriber's profile. To pull a value from another data extension at send time, use Lookup() (single value) or LookupRows() (several rows). A publication list models subscription preferences and does not carry tier data.",
  },
  {
    id: "c14",
    domain: "content",
    prompt:
      "An AMPscript block sets @tier = Lookup('Loyalty','Tier','SubscriberKey',_subscriberkey). For subscribers who are not in the Loyalty data extension, the email must still render and show the word 'Member'. Which approach handles this?",
    choices: [
      { id: "a", text: "Wrap the value with IIF(Empty(@tier), 'Member', @tier) when outputting it" },
      { id: "b", text: "Delete subscribers who are not in Loyalty from the audience" },
      { id: "c", text: "Switch to LookupRows() because it never returns an empty value" },
      { id: "d", text: "Use Output() with no arguments" },
    ],
    correct: ["a"],
    why: "Lookup() returns an empty string when no row matches. Testing Empty() and falling back to a default keeps the email from rendering blank text. LookupRows() returns a rowset that can have zero rows, so it needs its own RowCount() check.",
  },
  {
    id: "c15",
    domain: "content",
    prompt:
      "A single email needs to show up to three recently viewed products for each subscriber, and the product rows sit in a non-sendable data extension keyed by SubscriberKey and ProductID. Subscribers may have anywhere from zero to ten rows. Which function pattern fits?",
    choices: [
      { id: "a", text: "LookupRows() to get a rowset, RowCount() to check it, then a FOR loop reading Row() and Field()" },
      { id: "b", text: "Lookup() called three times with hard-coded product IDs, since it returns one row per call" },
      { id: "c", text: "A dynamic content block that reads the _Click data view directly for each subscriber" },
      { id: "d", text: "ContentBlockByKey() with one content block created per subscriber in Content Builder" },
    ],
    correct: ["a"],
    why: "LookupRows() returns multiple matching rows. RowCount() lets the code handle subscribers with none, and a loop with Row() and Field() renders as many as needed (cap with a limit, for example LookupOrderedRows()). Lookup() returns only one column of one row.",
  },
  {
    id: "c16",
    domain: "content",
    prompt:
      "A marketer is building a promotional email with dynamic content. Rule 1: Region = 'North' shows block A. Rule 2: Loyalty = 'Gold' shows block B. A default block C exists. A subscriber lives in the North region and is a Gold member. Which block does the subscriber see?",
    choices: [
      { id: "a", text: "Block A, because dynamic content rules are evaluated in order and the first matching rule wins" },
      { id: "b", text: "Block B, because Gold outranks region" },
      { id: "c", text: "Both A and B" },
      { id: "d", text: "Block C, because two rules match and the default resolves the conflict" },
    ],
    correct: ["a"],
    why: "Dynamic content evaluates rules from the top and stops at the first match. The default block is used only when no rule matches. If Gold should take priority, move that rule above the region rule.",
  },
  {
    id: "c17",
    domain: "content",
    prompt:
      "A marketer sends a test version of an email that includes a dynamic content rule, but the content always shows the default block. The production audience data extension has the attribute that drives the rule. What is the most likely cause?",
    choices: [
      { id: "a", text: "The test was sent to a test subscriber that lacks the attribute value the rule expects, so no rule matched" },
      { id: "b", text: "Dynamic content only evaluates rules for triggered sends and always shows the default for batch sends" },
      { id: "c", text: "The default block is locked in Content Builder so that rules cannot override it during tests" },
      { id: "d", text: "Test sends cannot evaluate dynamic content because test subscribers have no engagement history" },
    ],
    correct: ["a"],
    why: "Rules evaluate the recipient's data. A test subscriber without the attribute (or with a different value) falls through to the default. Use Preview and Test with a real subscriber or a test data extension that holds the attributes.",
  },
  {
    id: "c18",
    domain: "content",
    prompt:
      "A team wants to test two subject lines on 20% of a 500,000-subscriber audience (10% each), then send the winner automatically to the remaining 80% two hours later based on unique opens. Where should this be configured?",
    choices: [
      { id: "a", text: "An A/B test in Email Studio with a test percentage, a winner criterion of opens and an automatic winner send" },
      { id: "b", text: "Two separate batch sends scheduled a few hours apart, each to a different half of the audience" },
      { id: "c", text: "A Random Split in Journey Builder that routes contacts to two different subject lines" },
      { id: "d", text: "A Verification activity in Automation Studio that picks the better subject line after the send" },
    ],
    correct: ["a"],
    why: "Email Studio A/B testing lets you choose the element to test, the share of the audience used for testing, the winning metric and whether the winner is sent automatically after a set time. Two ad hoc sends do not give controlled sampling or automated winner selection.",
  },
  {
    id: "c19",
    domain: "content",
    prompt:
      "A subscriber receives a promotional email at 9 a.m. in their time zone every week, but the company wants each subscriber to receive it when they are most likely to open. Which feature uses historical engagement to choose the delivery time per subscriber?",
    choices: [
      { id: "a", text: "Einstein Send Time Optimization" },
      { id: "b", text: "Send throttling" },
      { id: "c", text: "Dynamic sender profile" },
      { id: "d", text: "Reply Mail Management" },
    ],
    correct: ["a"],
    why: "Send Time Optimization predicts the best time to deliver for each subscriber based on past engagement. Throttling controls the pace of a send, not the choice of time per person.",
  },
  {
    id: "c20",
    domain: "content",
    prompt:
      "A marketer wants the From Name to read 'Maya at Fieldhouse' when the email is sent by Maya's region and 'Sam at Fieldhouse' for Sam's region. The region owner's name is stored in the sendable data extension. How can this be done without creating a sender profile for every region?",
    choices: [
      { id: "a", text: "Use a sender profile whose From Name is built with personalization from the data extension attribute" },
      { id: "b", text: "Create one email per region and schedule a separate send for each, using a different sender profile" },
      { id: "c", text: "Put the owner's name in the subject line only, since From Name cannot be personalized" },
      { id: "d", text: "Change the Reply-To address, because the platform shows it as the From Name in most inboxes" },
    ],
    correct: ["a"],
    why: "A sender profile can use personalization strings (or AMPscript) for the From Name and From Address so a single profile serves many senders. The Reply-To address does not change the visible From Name.",
  },
  {
    id: "c21",
    domain: "content",
    prompt:
      "An email contains three links that all point to the same product URL: a hero image, a headline link and a button. The analyst needs to know which placement drives clicks. Marketing Cloud reports one combined click count for the URL. What should be done?",
    choices: [
      { id: "a", text: "Give each link a distinct alias so reporting separates them" },
      { id: "b", text: "Remove two of the links so that the URL appears only once in the email" },
      { id: "c", text: "Append a random number to the end of each URL so that each looks unique to the tracking system" },
      { id: "d", text: "Turn off click tracking and rely on the destination site's web analytics instead" },
    ],
    correct: ["a"],
    why: "The alias is the label shown in tracking. Identical URLs with identical aliases are grouped, so distinct aliases let reports (and link-level analytics) separate placement performance. Query strings can also differentiate for web analytics, but the platform's link name is the alias.",
  },
  {
    id: "c22",
    domain: "content",
    prompt:
      "A message contains a link built in AMPscript: %%=RedirectTo(@productUrl)=%%. What is the purpose of RedirectTo()?",
    choices: [
      { id: "a", text: "To wrap a link that is built dynamically so clicks on it are still tracked" },
      { id: "b", text: "To redirect the subscriber to the unsubscribe page when the link is clicked in an email" },
      { id: "c", text: "To automatically resend the email to the subscriber if the link is not clicked" },
      { id: "d", text: "To convert the URL to lowercase before the browser follows it, avoiding case errors" },
    ],
    correct: ["a"],
    why: "Links produced inside AMPscript are not automatically wrapped for tracking. RedirectTo() wraps the final URL so the click is recorded and the subscriber is then forwarded.",
  },
  {
    id: "c23",
    domain: "content",
    prompt:
      "Which TWO personalization strings or system strings are commonly placed in a commercial email footer to give subscribers control over their subscription? (Choose 2.)",
    choices: [
      { id: "a", text: "%%profile_center_url%%" },
      { id: "b", text: "%%unsub_center_url%%" },
      { id: "c", text: "%%view_email_url%%" },
      { id: "d", text: "%%xtmonth%%" },
    ],
    correct: ["a", "b"],
    why: "The profile center and unsubscribe center URLs let subscribers update their data and opt out. %%view_email_url%% opens the message in a browser, which is useful but not a subscription control. %%xtmonth%% returns the current month name.",
  },
  {
    id: "c24",
    domain: "content",
    prompt:
      "Most subscribers read the company's emails on phones. A designer proposes an 800px-wide, three-column layout with small text links. What is the best recommendation?",
    choices: [
      { id: "a", text: "Use a responsive layout of about 600px or less that stacks to a single column, with large tappable buttons" },
      { id: "b", text: "Keep the three-column layout and ask subscribers to zoom in when they read on a phone" },
      { id: "c", text: "Replace the layout with one large image so it looks identical in every email client" },
      { id: "d", text: "Add more columns and smaller text so more content fits above the fold on mobile" },
    ],
    correct: ["a"],
    why: "Responsive, single-column designs with generous tap targets read well on small screens. Fixed wide layouts and image-only designs are hard to read or unreadable when images are off.",
  },
  {
    id: "c25",
    domain: "content",
    prompt:
      "A brand manager wants to prevent campaign builders from changing legal text in the footer, while still letting them change the body copy. Which Content Builder capability supports this?",
    choices: [
      { id: "a", text: "A template with the footer in a locked region and editable slots for the body" },
      { id: "b", text: "A data extension containing the footer text, which marketers cannot edit without permission" },
      { id: "c", text: "A suppression list applied to the footer so that campaign builders cannot change it" },
      { id: "d", text: "An Einstein Content Selection model that decides which footer builders are allowed to use" },
    ],
    correct: ["a"],
    why: "Templates can define locked areas and editable slots so content creators work inside brand rules. A data extension or suppression list does not control what builders edit.",
  },
  {
    id: "c26",
    domain: "content",
    prompt:
      "A content approval step is enabled. A marketer finishes an email and tries to include it in a send, but Marketing Cloud blocks the send. What is the most likely reason?",
    choices: [
      { id: "a", text: "The email asset has not been approved by a user with approval permission" },
      { id: "b", text: "The subject line contains the subscriber's name, which is not allowed in approved content" },
      { id: "c", text: "The email was built from a template, and templates cannot be used in approved sends" },
      { id: "d", text: "The preheader is too short, which fails the content approval check automatically" },
    ],
    correct: ["a"],
    why: "When approvals are required, an asset cannot be used in a send until it is approved. A template, the use of personalization and preheader length do not block sends.",
  },
  {
    id: "c27",
    domain: "content",
    prompt:
      "A new campaign is about to go to 300,000 subscribers. Before sending, the team wants to check how the email renders in several email clients and whether it contains spam-trigger phrases. Which TWO steps should they take? (Choose 2.)",
    choices: [
      { id: "a", text: "Run the email through inbox preview/rendering for the major clients" },
      { id: "b", text: "Run a content/spam check on the email" },
      { id: "c", text: "Send to the full list and watch complaints" },
      { id: "d", text: "Turn off tracking so the email looks cleaner" },
    ],
    correct: ["a", "b"],
    why: "Pre-send checks are cheap compared with fixing a problem after delivery. Rendering previews catch broken layouts, and a spam check flags risky language or markup. Testing on the live list defeats the purpose.",
  },
  {
    id: "c28",
    domain: "content",
    prompt:
      "A subscriber receives a multipart email, but the email's plain-text part is empty. Several subscribers use clients that display text only. What is the best-practice fix?",
    choices: [
      { id: "a", text: "Provide a meaningful plain-text version alongside the HTML version" },
      { id: "b", text: "Remove the HTML part so the plain-text part is the only version delivered to subscribers" },
      { id: "c", text: "Add more images to the HTML version so the plain-text part is not needed" },
      { id: "d", text: "Change the Subscriber Key, which controls whether a text part is generated" },
    ],
    correct: ["a"],
    why: "A good plain-text alternative serves text-only clients and accessibility tools and reduces spam scoring on empty text parts. Deleting HTML or adding images does not help those readers.",
  },
  {
    id: "c29",
    domain: "content",
    prompt:
      "A sender profile, a delivery profile and a send classification are all selected on a user-initiated send. Which statement correctly describes what each controls?",
    choices: [
      { id: "a", text: "Sender profile: From details. Delivery profile: IP, header, footer. Send classification: commercial or transactional treatment" },
      { id: "b", text: "Sender profile: IP address. Delivery profile: From Name. Send classification: link tracking behavior" },
      { id: "c", text: "Sender profile: footer. Delivery profile: subject line. Send classification: audience selection" },
      { id: "d", text: "All three control only the reply address, and the platform uses whichever was created first" },
    ],
    correct: ["a"],
    why: "The send classification combines a sender profile and a delivery profile and indicates whether the message is commercial or transactional. The sender profile owns From and reply details and the delivery profile owns IP, header and footer.",
  },
  {
    id: "c30",
    domain: "content",
    prompt:
      "A company wants to send receipts and password resets the moment they are requested by its website. The messages are generated by an external system and sent one at a time. Which approach fits best?",
    choices: [
      { id: "a", text: "A triggered send (or transactional messaging API) invoked by the external system" },
      { id: "b", text: "A scheduled batch send each night to every customer who made a request that day" },
      { id: "c", text: "A manual send from Email Studio each time the external system reports a new request" },
      { id: "d", text: "A weekly newsletter that includes the latest receipts and password-reset links" },
    ],
    correct: ["a"],
    why: "Event-driven, one-to-one messages are what triggered sends and the transactional API are designed for. A batch send delays delivery, and manual sends do not scale.",
  },
  {
    id: "c31",
    domain: "content",
    prompt:
      "An email references a content block by key with %%=ContentBlockByKey('footer-legal')=%%. The marketing team later edits the footer block. What happens to emails that use it?",
    choices: [
      { id: "a", text: "Future sends render the updated block because the email references the block rather than a copy" },
      { id: "b", text: "Nothing changes, because blocks are copied into the email when it is created and stay fixed" },
      { id: "c", text: "The email must be recreated from the template before it can use the updated block" },
      { id: "d", text: "All earlier sends are automatically recalled and redelivered with the new footer" },
    ],
    correct: ["a"],
    why: "Referencing a block by key means one change updates every email that points to it at send time. Already delivered emails are not recalled. Copying content into each email loses this single-source benefit.",
  },
  {
    id: "c32",
    domain: "content",
    prompt:
      "A large campaign to 2 million subscribers is about to go out. The destination web server cannot handle a flood of simultaneous clicks right after delivery. What can the sender configure to spread delivery over time?",
    choices: [
      { id: "a", text: "Send throttling, to deliver the message at a controlled rate over a chosen period" },
      { id: "b", text: "A Random Split that sends the campaign to half of the audience first and the rest later" },
      { id: "c", text: "A larger preheader that encourages recipients to open the email over several days" },
      { id: "d", text: "A different subject line for each batch so subscribers do not all click at once" },
    ],
    correct: ["a"],
    why: "Throttling paces delivery across a time window so downstream systems (and your own call centre) are not overwhelmed. It does not change content or audience.",
  },
  {
    id: "c33",
    domain: "content",
    prompt:
      "A coupon code must appear only for subscribers who have not purchased in the last 90 days. The days-since-purchase value is available in the sendable data extension as DaysSincePurchase (a number). Which AMPscript snippet shows the code correctly?",
    choices: [
      { id: "a", text: "%%[ IF @DaysSincePurchase > 90 THEN ]%% Use code COMEBACK %%[ ENDIF ]%%" },
      { id: "b", text: "%%[ IF DaysSincePurchase = 90 ]%% Use code COMEBACK %%[ END ]%%" },
      { id: "c", text: "%%= IF(@DaysSincePurchase) =%%" },
      { id: "d", text: "%%[ IF @DaysSincePurchase < 90 THEN ]%% Use code COMEBACK %%[ ENDIF ]%%" },
    ],
    correct: ["a"],
    why: "Option A uses correct AMPscript block syntax and the right comparison for more than 90 days. Option B is missing THEN/ENDIF and compares equality, option C is not valid, and option D shows the code to recent purchasers instead.",
  },
  {
    id: "c34",
    domain: "content",
    prompt:
      "A marketer wants an email to appear to come from the account owner, yet replies must be handled automatically: out-of-office messages should be ignored and messages that say 'unsubscribe' should opt the sender out. Which feature handles replies?",
    choices: [
      { id: "a", text: "Reply Mail Management" },
      { id: "b", text: "Send throttling" },
      { id: "c", text: "Dynamic content" },
      { id: "d", text: "Content Builder tags" },
    ],
    correct: ["a"],
    why: "Reply Mail Management (RMM) processes replies sent to a managed reply address: it can handle auto-responders, unsubscribe keywords and forward the rest. It is unrelated to pacing, content or tagging.",
  },
  {
    id: "c35",
    domain: "content",
    prompt:
      "A user wants to see exactly how an email with AMPscript, dynamic content and personalization will render for three different real subscribers before it is sent. Which approach is correct?",
    choices: [
      { id: "a", text: "Use Preview and Test, select each subscriber or data extension row, and review the rendered email for each" },
      { id: "b", text: "Send to the whole list and watch the send job for rendering errors after delivery" },
      { id: "c", text: "Review only the HTML source, since AMPscript errors are visible in the markup" },
      { id: "d", text: "Check the sender profile, which stores a rendered copy of the email for each subscriber" },
    ],
    correct: ["a"],
    why: "Preview and Test renders the message with the selected subscriber's data, including AMPscript and dynamic content, so errors are caught before production. Reading the source does not evaluate the logic.",
  },
  {
    id: "c36",
    domain: "content",
    prompt:
      "A lead-capture page should let visitors sign up for the newsletter, then write the submission into a data extension, and show a thank-you page. The marketer has no developer. Which Marketing Cloud tool is the best fit?",
    choices: [
      { id: "a", text: "A CloudPages landing page with a Smart Capture form that writes to a data extension" },
      { id: "b", text: "A template with locked regions that publishes itself as a landing page for each visitor" },
      { id: "c", text: "A delivery profile that exposes a hosted form and writes submissions to the profile" },
      { id: "d", text: "A tracking extract that collects submissions from visitors and loads them overnight" },
    ],
    correct: ["a"],
    why: "Landing pages built in CloudPages can host Smart Capture forms that save to a data extension without custom code. The other options do not collect form submissions.",
  },
  {
    id: "c37",
    domain: "content",
    prompt:
      "A company sends a monthly newsletter and a separate set of order confirmations. A marketer asks whether the order confirmation can include a banner for an upcoming sale. What is the best answer?",
    choices: [
      { id: "a", text: "Keep transactional content focused on the transaction; heavy promotion can change how the message is classified" },
      { id: "b", text: "Yes, always, because transactional emails are exempt from commercial email rules entirely" },
      { id: "c", text: "Yes, but only if the receipt is sent twice, once with and once without the banner" },
      { id: "d", text: "No, because promotional content is not allowed in any email sent from Marketing Cloud" },
    ],
    correct: ["a"],
    why: "Mixing substantial marketing into a transactional message weakens the transactional treatment and may create compliance risk. Light, relevant additions may be acceptable depending on policy, but the primary purpose should remain the transaction.",
  },
  {
    id: "c38",
    domain: "content",
    prompt:
      "A subscriber opens the email in a client that blocks images and sees only broken placeholders. The email's call-to-action is an image with no alt text. Which TWO fixes improve this? (Choose 2.)",
    choices: [
      { id: "a", text: "Replace the image-based button with a live-text, bulletproof HTML button" },
      { id: "b", text: "Add descriptive alt text to images" },
      { id: "c", text: "Increase the file size of the image" },
      { id: "d", text: "Remove the link from the image" },
    ],
    correct: ["a", "b"],
    why: "Bulletproof buttons remain visible when images are off, and alt text tells the reader what the image would have shown. File size and removing the link do nothing for the blocked-image problem.",
  },
  {
    id: "c39",
    domain: "content",
    prompt:
      "A sender wants to exclude from a particular send anyone who is in a data extension named Do_Not_Contact_Q4, without changing the audience data extension. What can be configured on the send?",
    choices: [
      { id: "a", text: "An exclusion list or data extension selected in the send's exclusion settings" },
      { id: "b", text: "A new template with the excluded subscribers removed from its content areas" },
      { id: "c", text: "A different subject line for the excluded subscribers, so they ignore the email" },
      { id: "d", text: "A smaller preheader that discourages the excluded subscribers from opening it" },
    ],
    correct: ["a"],
    why: "Sends can specify exclusion lists and data extensions so those subscribers are skipped for that send. For rules that are always required, auto-suppression lists apply account-wide.",
  },
  {
    id: "c40",
    domain: "content",
    prompt:
      "Which statement about the difference between a suppression list used as an exclusion on a send and an auto-suppression list is correct?",
    choices: [
      { id: "a", text: "An exclusion applies to one send; an auto-suppression list applies to every send using a given send classification" },
      { id: "b", text: "They are identical, because both permanently remove the addresses from All Subscribers" },
      { id: "c", text: "Auto-suppression lists only apply to SMS sends, while exclusions apply to email" },
      { id: "d", text: "Exclusion lists permanently delete the matching subscribers when the send finishes" },
    ],
    correct: ["a"],
    why: "Auto-suppression lists are tied to send classifications and apply to every send that uses them. Per-send exclusions apply only to that send. Neither deletes subscribers from All Subscribers.",
  },
  {
    id: "c41",
    domain: "content",
    prompt:
      "An email must display a countdown that shows 'sale ends in X days' based on the current date and a stored end date in the data extension. Which AMPscript functions are most relevant?",
    choices: [
      { id: "a", text: "DateDiff() with Now(), then output the result" },
      { id: "b", text: "Lookup() with an empty key, which returns the number of days until the stored date" },
      { id: "c", text: "ContentBlockByKey() with a countdown block that updates itself once the email is opened" },
      { id: "d", text: "RedirectTo() with the stored date, which calculates the remaining days when clicked" },
    ],
    correct: ["a"],
    why: "DateDiff() computes the difference between two dates, and Now() provides the current date-time at send (or render). Lookup, content blocks and RedirectTo do not calculate dates.",
  },
  {
    id: "c42",
    domain: "content",
    prompt:
      "A user creates a send to a sendable data extension. The send fails to start with a message indicating a subscriber relationship problem. Which configuration is most likely missing?",
    choices: [
      { id: "a", text: "The sendable data extension's send relationship does not map the field holding the subscriber identifier" },
      { id: "b", text: "The email has no preheader, which Marketing Cloud requires for sends to data extensions" },
      { id: "c", text: "The IP address has too much reputation, so the system blocks sends to new audiences" },
      { id: "d", text: "The subject line is too long to be matched against the sendable data extension" },
    ],
    correct: ["a"],
    why: "A data extension is sendable only when a field is mapped to the subscriber (Subscriber Key or email address). Without that relationship Marketing Cloud cannot associate rows to subscribers for sending.",
  },
  {
    id: "c43",
    domain: "content",
    prompt:
      "A user wants an email to include the subscriber's first name in title case even though the data is stored in uppercase (MARIA). The fallback is 'there' if the name is blank. Which AMPscript expression is best?",
    choices: [
      { id: "a", text: "%%=IIF(Empty(@FirstName), 'there', ProperCase(@FirstName))=%%" },
      { id: "b", text: "%%=UpperCase(@FirstName)=%%, which converts the name and supplies a default for blank values" },
      { id: "c", text: "%%=Lookup(@FirstName)=%%, which returns the name in title case when it is blank" },
      { id: "d", text: "%%=Output(@FirstName)=%% only, since the platform formats names automatically" },
    ],
    correct: ["a"],
    why: "IIF() with Empty() supplies the fallback and ProperCase() normalizes capitalization. UpperCase() would keep it shouting, and Lookup()/Output() are not suited to this purpose.",
  },
  {
    id: "c44",
    domain: "content",
    prompt:
      "A brand wants a test send of an email to its internal team before the production send. Which TWO practices are recommended? (Choose 2.)",
    choices: [
      { id: "a", text: "Send the test to a dedicated test list or data extension with representative profile data" },
      { id: "b", text: "Check links, personalization and rendering in the received email" },
      { id: "c", text: "Send the test to the full production audience first" },
      { id: "d", text: "Skip the test if the email is a clone of last month's" },
    ],
    correct: ["a", "b"],
    why: "A test list with realistic data and a real review of the delivered message catch errors that previews can miss. Sending to production first or skipping tests invites mistakes.",
  },
  {
    id: "c45",
    domain: "content",
    prompt:
      "A send uses a delivery profile that places the email on a dedicated IP. A new transactional stream should not share that IP's reputation with promotions. What should be done?",
    choices: [
      { id: "a", text: "Create a separate delivery profile (and send classification) that uses a different IP for transactional mail" },
      { id: "b", text: "Use the same delivery profile and change the subject line so mailbox providers separate the streams" },
      { id: "c", text: "Rename the sender profile so that it is clearly labeled transactional" },
      { id: "d", text: "Increase the number of aliases in the email so the streams are tracked separately" },
    ],
    correct: ["a"],
    why: "Separating streams onto different IPs isolates reputation: a problem with promotions will not delay receipts. The IP is chosen through the delivery profile, so create a distinct profile and classification.",
  },
  {
    id: "c46",
    domain: "content",
    prompt:
      "An email includes a link to a CloudPages landing page that needs the subscriber's key passed as a parameter so the form can be pre-filled. Which function builds a secure, encrypted link to the page?",
    choices: [
      { id: "a", text: "CloudPagesURL() with the page ID and the parameter name and value" },
      { id: "b", text: "Lookup(), which returns the CloudPages link for the page when given a subscriber key" },
      { id: "c", text: "FormatDate(), which formats the link so that the subscriber's key is encrypted in it" },
      { id: "d", text: "ProperCase(), which builds the landing page link from the subscriber's profile attributes" },
    ],
    correct: ["a"],
    why: "CloudPagesURL() generates the link to a CloudPages page and passes parameters in an encrypted form so they cannot be tampered with. The other functions do not build page links.",
  },
  {
    id: "c47",
    domain: "content",
    prompt:
      "A newsletter is built in Content Builder from reusable blocks. The legal team asks for a single place where the privacy statement can be updated and automatically used by every email. What is the best design?",
    choices: [
      { id: "a", text: "Create the statement as one content block and reference it from every template or email" },
      { id: "b", text: "Paste the statement into every email separately so each email can be edited on its own" },
      { id: "c", text: "Store the text in the subject line so every email displays the latest wording" },
      { id: "d", text: "Use a data extension that holds the statement, with no block, and copy it into each template" },
    ],
    correct: ["a"],
    why: "A shared block gives you a single source of truth that updates everywhere it is referenced. Pasting copies makes later changes error-prone.",
  },
  {
    id: "c48",
    domain: "content",
    prompt:
      "A marketer sends a promotional email and wants to measure revenue generated after subscribers click through to the website, using Marketing Cloud tracking. Which approach is appropriate?",
    choices: [
      { id: "a", text: "Conversion tracking on the destination page, together with link tracking, to attribute purchases to the email" },
      { id: "b", text: "Count the number of times the email was forwarded and multiply by the average order value" },
      { id: "c", text: "Check the sender profile, which records revenue for each send made with it" },
      { id: "d", text: "Use the plain-text version only, because the HTML version cannot be tracked for purchases" },
    ],
    correct: ["a"],
    why: "Conversion tracking ties a post-click action (like a purchase) back to the originating send so the email's impact on revenue can be reported. Forwards and profiles do not measure conversions.",
  },
];
