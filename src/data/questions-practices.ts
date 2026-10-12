import type { Question } from "./questions";

export const PRACTICES: Question[] = [
  {
    id: "p7",
    domain: "practices",
    prompt:
      "Harbor & Pine, a home-goods retailer, is moving its promotional email from a shared IP to a new dedicated IP. Its file has 900,000 subscribers: 150,000 opened or clicked in the last 60 days, 400,000 engaged in the last year, and the rest have been silent for over a year. The marketing director wants to move the whole file to the new IP on day one to hit the holiday calendar. What should the email specialist recommend?",
    choices: [
      { id: "a", text: "Start with the most recently engaged subscribers in small daily volumes and increase gradually as inbox placement and complaint rates stay healthy" },
      { id: "b", text: "Send to the full file on day one, because a dedicated IP starts with no reputation and so has nothing to lose" },
      { id: "c", text: "Send only to the silent segment first so that engaged subscribers are not exposed to any deliverability risk" },
      { id: "d", text: "Hold volume flat for the first week, then jump straight to the entire file once the IP has settled" },
    ],
    correct: ["a"],
    why: "A new IP has no history, so mailbox providers judge it on early behavior. Warming with your most engaged subscribers produces strong opens and few complaints, and volume then ramps in steps. Sending everything at once looks like a spammer onboarding a fresh IP, and leading with disengaged contacts produces exactly the complaints and spam-trap hits that burn a new reputation.",
  },
  {
    id: "p8",
    domain: "practices",
    prompt:
      "A subscriber complains that they never signed up for Ridgeway Outdoor emails. The team checks and finds the address was entered by someone else on a web form, and the welcome email was sent immediately. Which acquisition practice would have prevented this?",
    choices: [
      { id: "a", text: "Double opt-in, where the new address must confirm through a link before receiving marketing email" },
      { id: "b", text: "A longer welcome email with a stronger offer so that the recipient is more likely to stay subscribed" },
      { id: "c", text: "Sending the welcome email at a different time of day to reduce the chance of complaints" },
      { id: "d", text: "Adding the address to a suppression list after the first send if the recipient complains" },
    ],
    correct: ["a"],
    why: "Double opt-in verifies that the owner of the mailbox actually requested the subscription, which protects against typos, mischief and spam-trap addresses. Content or timing changes do nothing about consent, and suppressing after the first send means the unwanted email has already gone out.",
  },
  {
    id: "p9",
    domain: "practices",
    prompt:
      "A retailer notices that open rates at one large mailbox provider have fallen sharply for three weeks while other providers look normal. Complaint rate at that provider has also climbed, and some messages appear to land in the spam folder. Which two actions are most appropriate? (Choose 2.)",
    choices: [
      { id: "a", text: "Reduce volume to that provider and target only recently engaged subscribers there while the issue is diagnosed" },
      { id: "b", text: "Review recent content, frequency and list sources for what changed at the time the trend started" },
      { id: "c", text: "Increase send frequency to that provider so engagement metrics recover" },
      { id: "d", text: "Remove the unsubscribe link to prevent further opt-outs from that provider" },
    ],
    correct: ["a", "b"],
    why: "A provider-specific drop points to reputation at that provider, so shrink exposure to the engaged core and look for what changed (new list source, cadence, creative). Sending more or hiding the unsubscribe link increases complaints and also violates commercial-email requirements.",
  },
  {
    id: "p10",
    domain: "practices",
    prompt:
      "Marketing wants to improve inbox placement for the company domain and stop others from spoofing it. The company currently sends from a shared Marketing Cloud domain with default authentication. Which item should be implemented to send with the company's own authenticated identity?",
    choices: [
      { id: "a", text: "Sender Authentication Package, so sends use a private domain with aligned SPF and DKIM" },
      { id: "b", text: "A new delivery profile with a different header and footer so mailbox providers see a fresh sender" },
      { id: "c", text: "Enabling Subscriber Key on the account so that every subscriber has a unique identifier" },
      { id: "d", text: "A longer preheader that names the company so recipients recognize the sender" },
    ],
    correct: ["a"],
    why: "Sender Authentication Package lets a brand send from its own domain with authentication that aligns to it (private domain, SPF/DKIM, branded links). Delivery profiles pick IP, header and footer. Preheaders and Subscriber Key have no bearing on domain authentication.",
  },
  {
    id: "p11",
    domain: "practices",
    prompt:
      "An audit of a promotional program shows the following: 18% of the list has not opened in over 18 months, bounce rate is 3.5%, and the spam-complaint rate is rising. The team proposes a re-engagement campaign. What should happen to subscribers who do not respond to it?",
    choices: [
      { id: "a", text: "Suppress them from regular promotional sends according to a documented sunset policy" },
      { id: "b", text: "Keep mailing them at the same frequency in case they eventually open" },
      { id: "c", text: "Move them to a separate list and send the same promotions with a different subject line" },
      { id: "d", text: "Change their Subscriber Key so they look like new subscribers" },
    ],
    correct: ["a"],
    why: "A sunset policy stops mailing contacts who stay unengaged after a re-engagement attempt, protecting reputation and metrics. Continuing to mail them, or disguising them as new subscribers, keeps feeding complaints, bounces and spam traps.",
  },
  {
    id: "p12",
    domain: "practices",
    prompt:
      "Which TWO elements must be included in a commercial marketing email to comply with common commercial-email regulations such as CAN-SPAM? (Choose 2.)",
    choices: [
      { id: "a", text: "A working way to opt out of future commercial messages" },
      { id: "b", text: "The sender's valid physical postal address" },
      { id: "c", text: "A personalized first name in the greeting" },
      { id: "d", text: "A link to view the email in a browser" },
    ],
    correct: ["a", "b"],
    why: "Commercial messages need a functional opt-out and the sender's physical address. Personalization and a view-in-browser link are good practice but are not legal requirements.",
  },
  {
    id: "p13",
    domain: "practices",
    prompt:
      "A company collects email addresses from a trade-show badge scanner. Attendees did not tick any opt-in box, but the sales team insists they showed interest by visiting the booth. How should the email specialist treat these addresses?",
    choices: [
      { id: "a", text: "Send an invitation that asks them to opt in to marketing email, and only add those who confirm" },
      { id: "b", text: "Add them all to the weekly newsletter because they visited the booth" },
      { id: "c", text: "Add them but suppress anyone who complains after the first send" },
      { id: "d", text: "Add only those with company email addresses because B2B contacts never need consent" },
    ],
    correct: ["a"],
    why: "Visiting a booth is not the same as consenting to marketing email. A permission-seeking message (or an explicit opt-in at capture) keeps the file clean and compliant. Waiting for complaints puts reputation at risk, and consent rules do not disappear because an address is a business address.",
  },
  {
    id: "p14",
    domain: "practices",
    prompt:
      "A subscription program lets customers choose between a weekly digest, a monthly summary and product-launch alerts. Marketing wants subscribers to manage these choices themselves and to be able to leave everything in one step. Which approach best fits?",
    choices: [
      { id: "a", text: "A preference center page that shows each subscription with an option to unsubscribe from all" },
      { id: "b", text: "A single unsubscribe link that removes people from every list with no alternative" },
      { id: "c", text: "Asking subscribers to reply to the email with their preferences" },
      { id: "d", text: "A static page that lists the three newsletters without any update capability" },
    ],
    correct: ["a"],
    why: "A preference center reduces full unsubscribes by letting people pick frequency or topics while still offering an obvious unsubscribe-from-all option. Reply-based management does not scale and an all-or-nothing link loses subscribers who only wanted fewer messages.",
  },
  {
    id: "p15",
    domain: "practices",
    prompt:
      "Bright Basket plans to send its first Black Friday campaign from a newly purchased list of 200,000 addresses that a vendor describes as 'verified shoppers'. What is the biggest risk?",
    choices: [
      { id: "a", text: "Purchased addresses have no consent for Bright Basket and often include spam traps, which damages sender reputation" },
      { id: "b", text: "The list will be too large for Marketing Cloud to import in one file, so the send will be delayed" },
      { id: "c", text: "The subject line will be truncated on mobile because purchased lists use older address formats" },
      { id: "d", text: "Purchased lists cannot be segmented, so every subscriber would receive the same offer" },
    ],
    correct: ["a"],
    why: "Bought lists lack permission and are a common source of spam traps and complaints, which can get a sender blocklisted and may violate the platform's acceptable use policy. Size and segmentation are not the issue.",
  },
  {
    id: "p16",
    domain: "practices",
    prompt:
      "A subscriber receives a welcome series that includes a coupon, a product guide, and a survey invitation. Which welcome-series design best supports long-term engagement?",
    choices: [
      { id: "a", text: "Send the first email immediately after sign-up, confirm what they will receive and how often, and space the follow-ups over several days" },
      { id: "b", text: "Send all three messages within the first hour so the new subscriber cannot miss the coupon, guide or survey" },
      { id: "c", text: "Wait a month before the first email so the subscriber has time to settle into the brand" },
      { id: "d", text: "Skip the welcome series and add the subscriber directly to the next promotional blast" },
    ],
    correct: ["a"],
    why: "Welcome emails get unusually high engagement when sent promptly, and they are the best moment to set expectations about content and cadence. Compressing them floods the new subscriber, and delaying them lets the signup intent fade.",
  },
  {
    id: "p17",
    domain: "practices",
    prompt:
      "A marketer is reviewing a campaign dashboard and sees that the open rate rose from 28% to 52% in one quarter, but click-through rate and conversions did not move. A large share of the audience uses Apple Mail. What is the best interpretation?",
    choices: [
      { id: "a", text: "Mail privacy protection likely pre-loads tracking pixels, inflating opens, so clicks and conversions should guide decisions" },
      { id: "b", text: "The creative has improved dramatically, so the team should double send frequency to capture the gain" },
      { id: "c", text: "Opens are always accurate, so the lack of clicks proves the offer itself is poor" },
      { id: "d", text: "The tracking data views are corrupted and should be reset before any further analysis" },
    ],
    correct: ["a"],
    why: "Apple Mail Privacy Protection can fetch images automatically, which registers as an open regardless of reader behavior. When opens spike without clicks or conversions, treat opens as unreliable and judge on clicks and downstream outcomes.",
  },
  {
    id: "p18",
    domain: "practices",
    prompt:
      "A subscriber clicks the unsubscribe link in a commercial email. How quickly should the company honor the request, and what is the best practice?",
    choices: [
      { id: "a", text: "Honor it promptly, within the legal timeframe, and ideally immediately so no further commercial emails are sent" },
      { id: "b", text: "Wait for the next monthly list update so the change can be processed together with other changes in a batch" },
      { id: "c", text: "Ask the subscriber to confirm the request by replying to an email before removing them from sends" },
      { id: "d", text: "Continue sending commercial email until the subscriber has used the unsubscribe link at least three times" },
    ],
    correct: ["a"],
    why: "Opt-outs must be honored promptly, and an unsubscribe in Marketing Cloud takes effect automatically on future sends. Adding friction or batch delays is both poor practice and a compliance risk.",
  },
  {
    id: "p19",
    domain: "practices",
    prompt:
      "A retailer wants to test whether a shorter subject line improves open rate. The audience is 400,000 subscribers. Which testing approach follows best practice?",
    choices: [
      { id: "a", text: "Test one variable (subject length) on a random sample, then send the winner to the remainder" },
      { id: "b", text: "Change the subject, send time and hero image together and compare the result to last month" },
      { id: "c", text: "Send version A to people who bought recently and version B to everyone else" },
      { id: "d", text: "Send both versions to the whole list at once and keep whichever number looks higher" },
    ],
    correct: ["a"],
    why: "A clean A/B test isolates a single variable and uses random samples so differences can be attributed to it. Changing several variables or comparing different audiences confounds the result.",
  },
  {
    id: "p20",
    domain: "practices",
    prompt:
      "Which TWO metrics best indicate that a promotional program is harming sender reputation and needs immediate attention? (Choose 2.)",
    choices: [
      { id: "a", text: "A rising spam-complaint rate" },
      { id: "b", text: "A rising hard-bounce rate from invalid addresses" },
      { id: "c", text: "A slightly higher click-to-open rate" },
      { id: "d", text: "More forwards to a friend" },
    ],
    correct: ["a", "b"],
    why: "Complaints and hard bounces are the signals mailbox providers weigh most heavily when deciding whether a sender is trustworthy. Better click-to-open or more forwards are positive engagement indicators.",
  },
  {
    id: "p21",
    domain: "practices",
    prompt:
      "An online bookseller sends the same newsletter to its entire file every day. Unsubscribes are climbing, and the newsletter has no connection to what customers have bought or browsed. Which change best aligns with best practice?",
    choices: [
      { id: "a", text: "Segment by interests and engagement, personalize content, and adjust frequency by segment" },
      { id: "b", text: "Send the newsletter twice a day so that every subscriber has more chances to see something relevant" },
      { id: "c", text: "Remove the footer to shorten the email and make unsubscribing less prominent" },
      { id: "d", text: "Switch to an all-caps subject line so the newsletter stands out in a crowded inbox" },
    ],
    correct: ["a"],
    why: "Relevance drives engagement and lowers unsubscribes. Segmentation and personalization plus right-sized frequency respect subscriber attention, while more volume, hiding the footer and shouting in the subject line all push in the wrong direction.",
  },
  {
    id: "p22",
    domain: "practices",
    prompt:
      "A hotel chain is deciding which sends should be classified as transactional. Which message is most appropriately sent as a transactional email?",
    choices: [
      { id: "a", text: "A booking confirmation containing the reservation details the guest requested" },
      { id: "b", text: "A promotion offering 20% off the guest's next stay, since the guest has just completed a booking" },
      { id: "c", text: "A newsletter with seasonal travel ideas sent to everyone who has ever booked" },
      { id: "d", text: "A survey that invites guests to join the loyalty program after their stay" },
    ],
    correct: ["a"],
    why: "Transactional messages are triggered by a customer action and deliver information that completes or confirms it. Promotional or relationship-building content belongs under a commercial classification even if it follows a transaction.",
  },
  {
    id: "p23",
    domain: "practices",
    prompt:
      "After a poorly targeted campaign, the unsubscribe rate doubled. The marketing lead wants to bring the lost subscribers back by re-adding them to the list. What is the correct response?",
    choices: [
      { id: "a", text: "Do not re-add them without fresh consent; honor the unsubscribes and invite them to opt back in if appropriate" },
      { id: "b", text: "Re-add them to the list, because unsubscribes only last for the campaign in which they occurred" },
      { id: "c", text: "Import them again under a new Subscriber Key so that the old unsubscribe does not apply" },
      { id: "d", text: "Change their status to Active during the next import because the campaign was the cause" },
    ],
    correct: ["a"],
    why: "An unsubscribe is a withdrawal of consent. Circumventing it through re-imports or new keys is non-compliant and a major complaint driver. If there is a legitimate reason to ask again, an explicit opt-in request is the way.",
  },
  {
    id: "p24",
    domain: "practices",
    prompt:
      "A company's welcome email was designed with a single large image that contains all the text. Many subscribers' clients block images by default. What is the best fix?",
    choices: [
      { id: "a", text: "Use live HTML text for key content and add descriptive alt text to images" },
      { id: "b", text: "Make the single image larger and increase its resolution so it stays readable on small screens" },
      { id: "c", text: "Add several more images with the same text so that at least one is likely to load" },
      { id: "d", text: "Remove the unsubscribe link and footer to simplify the layout for image-blocking clients" },
    ],
    correct: ["a"],
    why: "An image-only email is a blank screen when images are blocked and is also a spam signal. Live text and alt text keep the message readable and accessible.",
  },
  {
    id: "p25",
    domain: "practices",
    prompt:
      "A senior stakeholder asks why the email team would rather send fewer, more targeted messages to engaged subscribers than a daily blast to the full list. Which statement best explains the benefit?",
    choices: [
      { id: "a", text: "Providers weigh engagement and complaints for inbox placement, so targeted sends protect future delivery" },
      { id: "b", text: "Marketing Cloud charges a lower license fee for smaller sends, so targeted sending reduces cost" },
      { id: "c", text: "Subscribers are legally limited to one commercial email per week in most regions" },
      { id: "d", text: "A smaller send removes the requirement to include an unsubscribe link and postal address" },
    ],
    correct: ["a"],
    why: "Inbox providers use engagement and complaint signals to decide where mail lands. Mailing disengaged contacts drags those signals down. There is no legal weekly cap and an unsubscribe link is still required.",
  },
  {
    id: "p26",
    domain: "practices",
    prompt:
      "A brand starts a triggered abandoned-cart email. A marketer wants to follow best practice for timing and frequency. Which design is best?",
    choices: [
      { id: "a", text: "Send the first reminder within hours, a follow-up a day or two later, and stop once the customer purchases" },
      { id: "b", text: "Send ten reminders over two days regardless of whether the customer completes the purchase" },
      { id: "c", text: "Send a single reminder three weeks later, when the customer is least likely to have moved on" },
      { id: "d", text: "Send reminders only to customers who have already purchased the items in the cart" },
    ],
    correct: ["a"],
    why: "Cart reminders convert best when they are timely, limited in number, and stop after conversion. Over-sending or sending to buyers wastes goodwill; sending weeks later misses the intent.",
  },
];
