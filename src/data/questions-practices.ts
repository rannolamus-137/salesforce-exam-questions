import type { Question } from "./questions";

export const PRACTICES: Question[] = [
  {
    id: "p7",
    domain: "practices",
    prompt:
      "Harbor & Pine, a home-goods retailer, is moving its promotional email from a shared IP to a new dedicated IP. Its file has 900,000 subscribers: 150,000 opened or clicked in the last 60 days, 400,000 engaged in the last year, and the rest have been silent for over a year. The marketing director wants to move the whole file to the new IP on day one to hit the holiday calendar. What should the email specialist recommend?",
    choices: [
      { id: "a", text: "Start with recently engaged subscribers in small daily volumes and grow as placement stays healthy" },
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
      "A weekly promotion to 600,000 subscribers shows: delivered 98.2%, hard bounces 0.1%, and spam-complaint rates of 0.02% at Gmail, 0.04% at Outlook and 0.31% at Yahoo. Yahoo opens have also fallen by 40% over three sends, while other providers are stable. Which response is the most appropriate?",
    choices: [
      { id: "a", text: "Treat it as a Yahoo-specific reputation issue: limit Yahoo volume to engaged subscribers and find what changed" },
      { id: "b", text: "Treat it as a platform-wide delivery fault and open a case, because bounce and complaint rates are healthy overall" },
      { id: "c", text: "Raise send frequency to Yahoo subscribers so their engagement signals recover faster than the complaints build" },
      { id: "d", text: "Remove all Yahoo addresses permanently, because one provider's complaint rate always indicates the whole list is purchased" },
    ],
    correct: ["a"],
    why: "Overall metrics hide a provider-level problem. Complaints at one mailbox provider are the clearest sign of a reputation issue there, so limit exposure to the engaged core and look for what changed (new source, cadence, creative). Sending more worsens it and deleting a whole provider's subscribers is an overreaction.",
  },
  {
    id: "p13",
    domain: "practices",
    prompt:
      "A brand publishes a DMARC policy of p=reject for brand.com. Marketing then sends from news@brand.com through Marketing Cloud using the default shared sending domain, with no Sender Authentication Package. Some receivers start rejecting the mail. Which TWO statements explain the problem and the fix? (Choose 2.)",
    choices: [
      { id: "a", text: "DMARC needs SPF or DKIM to pass AND align with the visible From domain, and the shared domain's authentication does not align with brand.com" },
      { id: "b", text: "A sending domain authenticated through Sender Authentication Package lets DKIM/SPF align with the From domain so DMARC can pass" },
      { id: "c", text: "DMARC rejection occurs only when the subject line contains promotional terms, so the copy should be softened" },
      { id: "d", text: "Marketing Cloud overrides DMARC on commercial sends, so the rejections must come from a separate IP issue" },
    ],
    correct: ["a", "b"],
    why: "DMARC passes only when SPF or DKIM authenticates a domain that aligns with the From address. Default shared-domain signing does not align with brand.com. Sender Authentication Package sets up a branded domain so alignment is possible. Copy and IP reputation are separate matters.",
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
      { id: "a", text: "Purchased addresses lack consent and often include spam traps, which damages sender reputation" },
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
      { id: "a", text: "Send the first email right after sign-up, set expectations on content and frequency, then space follow-ups" },
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
      { id: "a", text: "Mail privacy protection pre-loads tracking pixels and inflates opens, so judge by clicks and conversions" },
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
      "A subscriber clicks 'This is spam' in their mailbox provider's interface. The provider participates in a feedback loop with Marketing Cloud. What should the sender expect, and what does it imply for list hygiene?",
    choices: [
      { id: "a", text: "The complaint is reported back and the subscriber is unsubscribed automatically, so complaint rates should be monitored as an early reputation warning" },
      { id: "b", text: "Nothing is recorded, because only unsubscribe-link clicks are tracked and complaints must be gathered by hand" },
      { id: "c", text: "The subscriber is moved to Held status for 30 days and then reactivated automatically to give the sender another chance" },
      { id: "d", text: "The complaint is added to the next tracking extract but the subscriber keeps receiving mail until they use the unsubscribe link" },
    ],
    correct: ["a"],
    why: "Feedback loops return complaints to the sender, and Marketing Cloud treats a complaint as an opt-out so the subscriber stops receiving commercial email. Because complaints damage reputation quickly, rising complaint rates should trigger a review of targeting, frequency and list sources.",
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
      "Two days after a sudden send to 250,000 contacts from an old trade-show file, delivery to several providers collapses, and the sending IP appears on a public blocklist. Which TWO actions belong in the remediation? (Choose 2.)",
    choices: [
      { id: "a", text: "Stop mailing the old file, identify and remove the segment that likely contained spam traps or invalid addresses, and rebuild from engaged, permissioned contacts" },
      { id: "b", text: "Once the cause is removed, follow the blocklist operator's delisting process and ramp volume back up gradually" },
      { id: "c", text: "Request delisting immediately and resume the same send to the same file to prove the problem is fixed" },
      { id: "d", text: "Move the same file to a different sending IP so the blocklist no longer applies to the program" },
    ],
    correct: ["a", "b"],
    why: "Blocklisting is a symptom, so remove the cause (old or unpermissioned data with traps) before asking for delisting, then ramp carefully. Re-sending to the same file or hopping IPs just repeats the offense on a new reputation.",
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
      "A three-email welcome series has these results: email 1 open 62% and unsubscribe 0.2%; email 2 open 18% and unsubscribe 0.3%; email 3 (a 20% coupon) open 11% and unsubscribe 1.4%. Mailbox-provider complaints also rise on email 3. Which conclusion is best supported?",
    choices: [
      { id: "a", text: "Email 3 is mismatched on timing, cadence or relevance; review those before changing the offer" },
      { id: "b", text: "The series is working as designed because open rates always fall and unsubscribes always rise for the final email" },
      { id: "c", text: "The coupon is too generous; raise it to 30% so that more subscribers stay through the end of the series" },
      { id: "d", text: "The first email was too effective, so it should be delayed by a week to equalize the three open rates" },
    ],
    correct: ["a"],
    why: "A steep unsubscribe and complaint jump on one email in a series points to timing, cadence or relevance, not the series structure as a whole. Check what subscribers were promised at signup and how closely the emails are spaced before touching the offer.",
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
      "A retailer wants to re-engage 120,000 subscribers who have neither opened nor clicked in 12 months. Which plan best protects deliverability while giving them a fair chance to stay?",
    choices: [
      { id: "a", text: "Send a short re-engagement series to this segment only, with a deadline, and suppress non-responders" },
      { id: "b", text: "Send the regular promotional calendar to them at higher frequency for a month, then evaluate the results" },
      { id: "c", text: "Add them to a separate list and send the usual newsletter, since inactive subscribers cannot complain" },
      { id: "d", text: "Move them all to a brand-new dedicated IP so that their poor engagement does not affect the main program" },
    ],
    correct: ["a"],
    why: "A bounded, separate win-back with a clear end and a suppression rule protects the main program. Mailing inactives more often, or hiding them on another IP, spreads or hides the same reputation damage.",
  },
  {
    id: "p25",
    domain: "practices",
    prompt:
      "A company's welcome email offers a 10% discount. Within hours, hundreds of sign-ups arrive from the same few IP addresses using addresses like a1@mail-example.com and a2@mail-example.com, and the discount is redeemed. Which acquisition control best reduces this abuse while keeping a good signup experience for real customers?",
    choices: [
      { id: "a", text: "Double opt-in plus form protection such as CAPTCHA, with the discount released only after confirmation" },
      { id: "b", text: "Remove the discount so that no incentive remains, then keep the single opt-in as is" },
      { id: "c", text: "Send the discount code in the subject line so it is available without opening the email" },
      { id: "d", text: "Import the new sign-ups straight into the promotional list and let unsubscribes remove the fake ones" },
    ],
    correct: ["a"],
    why: "Bot and fake sign-ups are blocked by confirming control of the mailbox and by protecting the form. Releasing the incentive only after confirmation keeps real customers happy. Importing unverified sign-ups risks bounces and spam traps.",
  },
  {
    id: "p26",
    domain: "practices",
    prompt:
      "An abandoned-cart series sends email 1 after 1 hour, email 2 after 24 hours and email 3 after 72 hours. Reporting shows that 35% of recipients purchase after email 1, yet email 2 and 3 still go to them for the next two days, triggering complaints. What is the best correction?",
    choices: [
      { id: "a", text: "Exit contacts when the purchase event is recorded and keep the cadence for non-purchasers" },
      { id: "b", text: "Cut the series to a single email, because follow-ups never add revenue after the first reminder" },
      { id: "c", text: "Send all three emails within the first hour so that buyers cannot receive them days after purchasing" },
      { id: "d", text: "Add a coupon to email 2 and 3 so that the buyers feel rewarded for the emails they receive" },
    ],
    correct: ["a"],
    why: "Purchasers must leave the series. Journey goals or exit criteria on the purchase event stop irrelevant reminders and the complaints they cause, while the non-purchasers still get the sequence.",
  },
];
