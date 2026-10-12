import type { Question } from "./questions";

export const INSIGHTS: Question[] = [
  {
    id: "i11",
    domain: "insights",
    prompt:
      "A campaign was delivered to 100,000 subscribers: 2,000 bounced, 24,000 unique subscribers opened it, and 3,600 unique subscribers clicked at least one link. The marketing director asks for the click-to-open rate. Which value is correct?",
    choices: [
      { id: "a", text: "15% (3,600 unique clicks divided by 24,000 unique opens)" },
      { id: "b", text: "3.6% (3,600 divided by 100,000 sent)" },
      { id: "c", text: "24% (24,000 divided by 100,000)" },
      { id: "d", text: "3.67% (3,600 divided by 98,000 delivered)" },
    ],
    correct: ["a"],
    why: "Click-to-open rate compares unique clicks with unique opens: 3,600 / 24,000 = 15%. 3.6% would be clicks over sent and 3.67% would be the click-through rate based on delivered (98,000). 24% is the open rate on sent.",
  },
  {
    id: "i12",
    domain: "insights",
    prompt:
      "Using the same campaign (100,000 sent, 2,000 bounced, 24,000 unique opens), which calculation gives the delivery-based open rate that most reporting tools use?",
    choices: [
      { id: "a", text: "24,000 / 98,000 ≈ 24.5%, unique opens divided by delivered" },
      { id: "b", text: "24,000 / 100,000 = 24%, unique opens divided by sent" },
      { id: "c", text: "2,000 / 100,000 = 2%" },
      { id: "d", text: "98,000 / 24,000" },
    ],
    correct: ["a"],
    why: "Delivered = sent minus bounces = 98,000, and delivery-based open rate is unique opens over delivered. Bounces never reached an inbox so they should not count against the rate.",
  },
  {
    id: "i13",
    domain: "insights",
    prompt:
      "Which TWO statements about the difference between total and unique metrics are correct? (Choose 2.)",
    choices: [
      { id: "a", text: "Unique opens count each subscriber once regardless of how many times they opened" },
      { id: "b", text: "Total clicks count every click, including repeated clicks by the same subscriber" },
      { id: "c", text: "Unique metrics count every event" },
      { id: "d", text: "Total opens can never exceed unique opens" },
    ],
    correct: ["a", "b"],
    why: "Unique metrics deduplicate by subscriber, and total metrics count every event. Total opens are therefore equal to or greater than unique opens.",
  },
  {
    id: "i14",
    domain: "insights",
    prompt:
      "A marketer reviews a report and notices a high number of 'soft bounces' for a specific domain. What does a soft bounce indicate?",
    choices: [
      { id: "a", text: "A temporary delivery problem such as a full mailbox or a temporarily unavailable server" },
      { id: "b", text: "A permanent failure because the address does not exist and will not accept mail" },
      { id: "c", text: "The subscriber unsubscribed by using the link in a previous email" },
      { id: "d", text: "The subscriber marked the email as spam, which sends a complaint through the provider" },
    ],
    correct: ["a"],
    why: "Soft bounces are temporary failures and are retried. Hard bounces are permanent (nonexistent address). Unsubscribes and spam complaints are separate metrics.",
  },
  {
    id: "i15",
    domain: "insights",
    prompt:
      "A marketer wants to understand why an email underperformed compared with the previous campaign. Which ordered approach best follows a sound analysis process?",
    choices: [
      { id: "a", text: "Check delivery metrics first, then engagement (opens, clicks), then conversions, and compare against benchmarks and prior sends" },
      { id: "b", text: "Start by changing the creative, since content is the most common cause of a drop in performance" },
      { id: "c", text: "Look only at the subject line, because it determines whether the email is opened" },
      { id: "d", text: "Look only at the unsubscribe count, since it shows whether the campaign was disliked" },
    ],
    correct: ["a"],
    why: "Work from delivery to engagement to outcomes so you find where performance fell off. Comparing against benchmarks and prior campaigns gives context. Changing things before diagnosing guesses at the cause.",
  },
  {
    id: "i16",
    domain: "insights",
    prompt:
      "A marketing manager wants a recurring report on email performance emailed to leadership every Monday morning. How should the report be set up?",
    choices: [
      { id: "a", text: "Run the report in Reports, then schedule it to run on a recurring basis and deliver it to the recipients" },
      { id: "b", text: "Ask an analyst to export the data manually every Sunday and email it to leadership" },
      { id: "c", text: "Create a Random Split in Journey Builder that sends the figures each Monday" },
      { id: "d", text: "Change the sender profile so that leadership is added as a recipient on every send" },
    ],
    correct: ["a"],
    why: "Reports can be saved and scheduled with recurring delivery. This removes manual effort and ensures consistency.",
  },
  {
    id: "i17",
    domain: "insights",
    prompt:
      "A team wants to compare the performance of multiple emails sent over the past year in one view, and to see trends. Which approach is the most suitable using standard Marketing Cloud reporting?",
    choices: [
      { id: "a", text: "Use an email performance or trend report that spans a date range and shows rates over time" },
      { id: "b", text: "Open each email's tracking page separately and write the numbers down" },
      { id: "c", text: "Check only the last email" },
      { id: "d", text: "Review only IP addresses" },
    ],
    correct: ["a"],
    why: "Standard reports aggregate several sends over time, making trends visible. Per-email lookups do not scale.",
  },
  {
    id: "i18",
    domain: "insights",
    prompt:
      "A marketing analyst needs to see which links in a campaign received the most clicks and where on the email (position) they were. Which report or tool provides this?",
    choices: [
      { id: "a", text: "A link-level click report or click-activity view for the send" },
      { id: "b", text: "The bounce report, which breaks down failed deliveries by link and message position" },
      { id: "c", text: "The subscriber status report, which lists which links each subscriber clicked" },
      { id: "d", text: "The IP warm-up chart, which compares link clicks by sending address" },
    ],
    correct: ["a"],
    why: "Click reports break down clicks by link (alias), and some views show a visual overlay of click distribution. Bounce and status reports do not show link clicks.",
  },
  {
    id: "i19",
    domain: "insights",
    prompt:
      "A company sees Subscriber A listed as having clicked a link in a report, yet the click was recorded within one second of delivery, and several other subscribers at the same company show the same pattern. What is the likely explanation?",
    choices: [
      { id: "a", text: "Security scanners at the recipient's mail gateway followed the links automatically, producing non-human clicks" },
      { id: "b", text: "The subscribers are extremely fast readers who open every email within seconds of delivery" },
      { id: "c", text: "The sending IP is dedicated, which causes recipients' links to be clicked automatically" },
      { id: "d", text: "The subject line is long, which makes email clients open the links on the reader's behalf" },
    ],
    correct: ["a"],
    why: "Corporate security tools often pre-scan links, which registers as clicks. Look for clicks at implausibly short intervals after delivery and treat them with caution when judging engagement.",
  },
  {
    id: "i20",
    domain: "insights",
    prompt:
      "A marketer sends a campaign to a data extension, but the report shows fewer sends than the data extension's row count. Which TWO explanations are plausible discrepancies caused by subscriber preferences and status? (Choose 2.)",
    choices: [
      { id: "a", text: "Some subscribers have a status of Unsubscribed or Held and were skipped" },
      { id: "b", text: "Some rows were excluded by an exclusion list or suppression list applied to the send" },
      { id: "c", text: "The email contains too many images" },
      { id: "d", text: "The subject line contains an emoji" },
    ],
    correct: ["a", "b"],
    why: "Send discrepancies usually come from subscriber status and suppression. Use the Not Sent / send log reports to see exactly which rows were skipped and why. Content details do not reduce the sent count.",
  },
  {
    id: "i21",
    domain: "insights",
    prompt:
      "A subscriber complains that they did not receive an important email. The marketer finds the subscriber on the audience data extension. What is the best first step to troubleshoot?",
    choices: [
      { id: "a", text: "Check the subscriber's status in All Subscribers, any suppression or exclusion that applied, and the job's send and bounce records" },
      { id: "b", text: "Resend the email to the whole audience, which usually reaches the subscriber on the second attempt" },
      { id: "c", text: "Change the subscriber's key, which forces a new delivery attempt on the next send" },
      { id: "d", text: "Delete the subscriber and re-import, which clears any status that blocked the send" },
    ],
    correct: ["a"],
    why: "Look at status, suppression and per-subscriber send results before taking action. Resending to everyone or deleting data may hide the cause.",
  },
  {
    id: "i22",
    domain: "insights",
    prompt:
      "A subscriber says they unsubscribed from the weekly newsletter but still receives the monthly digest and thinks that is a mistake. What is the most likely explanation?",
    choices: [
      { id: "a", text: "They opted out of the weekly publication list only; the digest is a separate list and they remain active" },
      { id: "b", text: "Marketing Cloud ignores unsubscribes from publication lists until the next monthly clean-up" },
      { id: "c", text: "The subscriber is on a dedicated IP, so unsubscribes take longer to process" },
      { id: "d", text: "Tracking is disabled, so the unsubscribe was never recorded for any list" },
    ],
    correct: ["a"],
    why: "Publication-list unsubscribes are scoped. If the customer wants to stop everything, they need to choose to unsubscribe from all, which sets the status in All Subscribers to Unsubscribed.",
  },
  {
    id: "i23",
    domain: "insights",
    prompt:
      "A marketer wants to predict, for each subscriber, how likely they are to open, click or unsubscribe, so they can target low-likelihood subscribers with a re-engagement offer. Which Einstein product fits?",
    choices: [
      { id: "a", text: "Einstein Engagement Scoring" },
      { id: "b", text: "Einstein Copy Insights" },
      { id: "c", text: "Einstein Content Selection" },
      { id: "d", text: "Einstein Messaging Insights" },
    ],
    correct: ["a"],
    why: "Engagement Scoring gives each subscriber predictive scores and personas. Copy Insights analyzes language, Content Selection chooses content, and Messaging Insights flags performance anomalies.",
  },
  {
    id: "i24",
    domain: "insights",
    prompt:
      "A marketer wants to learn how emotions, tone and keywords in past subject lines related to open rates, to guide future copy. Which Einstein product provides that analysis?",
    choices: [
      { id: "a", text: "Einstein Copy Insights" },
      { id: "b", text: "Einstein Engagement Frequency" },
      { id: "c", text: "Einstein Send Time Optimization" },
      { id: "d", text: "Einstein Recommendations" },
    ],
    correct: ["a"],
    why: "Copy Insights analyzes the text of subject lines and ties language characteristics to engagement. The other products address cadence, timing and product suggestions.",
  },
  {
    id: "i25",
    domain: "insights",
    prompt:
      "An alert shows that the click rate for a journey email was unusually low compared with the expected range. Which Einstein product raised the alert and what does it provide?",
    choices: [
      { id: "a", text: "Einstein Messaging Insights, which flags significant changes in opens, clicks and unsubscribes" },
      { id: "b", text: "Einstein Copy Insights, which rewrites the copy when clicks fall below expectation" },
      { id: "c", text: "Einstein Content Tagging, which labels the images that received fewer clicks" },
      { id: "d", text: "Einstein Recommendations, which picks products that were clicked less than expected" },
    ],
    correct: ["a"],
    why: "Messaging Insights monitors engagement and alerts on anomalies versus expectation so marketers can investigate quickly.",
  },
  {
    id: "i26",
    domain: "insights",
    prompt:
      "A marketer worries that subscribers are being emailed too often. They want a model that estimates, for each subscriber, whether they are over-mailed or could handle more messages. Which Einstein product helps?",
    choices: [
      { id: "a", text: "Einstein Engagement Frequency" },
      { id: "b", text: "Einstein Messaging Insights" },
      { id: "c", text: "Einstein Copy Insights" },
      { id: "d", text: "Einstein Content Selection" },
    ],
    correct: ["a"],
    why: "Engagement Frequency analyzes how many messages subscribers receive relative to their engagement so you can reduce or increase cadence by segment.",
  },
  {
    id: "i27",
    domain: "insights",
    prompt:
      "Which TWO capabilities are provided by Einstein Content Selection and Einstein Recommendations respectively? (Choose 2.)",
    choices: [
      { id: "a", text: "Content Selection chooses the best content asset to show in a slot from a set of options, per recipient" },
      { id: "b", text: "Recommendations suggests products or content items based on catalog and behavior" },
      { id: "c", text: "Content Selection schedules sends" },
      { id: "d", text: "Recommendations manages unsubscribes" },
    ],
    correct: ["a", "b"],
    why: "Content Selection picks among assets, and Recommendations produces item suggestions from a catalog. Neither schedules sends or manages unsubscribes.",
  },
  {
    id: "i28",
    domain: "insights",
    prompt:
      "A performance report shows that several subscribers who are Apple Mail users have opens recorded immediately on delivery whether or not they read the email. Which metric is the most reliable alternative for judging engagement?",
    choices: [
      { id: "a", text: "Clicks and downstream conversions" },
      { id: "b", text: "Total opens" },
      { id: "c", text: "Delivered count" },
      { id: "d", text: "The number of images" },
    ],
    correct: ["a"],
    why: "Privacy features can inflate opens. Clicks and conversions reflect real action and are less affected.",
  },
  {
    id: "i29",
    domain: "insights",
    prompt:
      "A marketer wants to find subscribers who were in a send's audience but were not sent the message, along with the reason (for example, held or excluded). Which output helps?",
    choices: [
      { id: "a", text: "A report or extract of subscribers not sent to for the send job" },
      { id: "b", text: "The click report, which lists audience members who did not click and the reasons" },
      { id: "c", text: "The bounce report, which lists audience members who were not sent the message" },
      { id: "d", text: "A template list, which shows each audience member's status at send time" },
    ],
    correct: ["a"],
    why: "Not-sent reporting explains why audience members were excluded, which is the basis for troubleshooting send discrepancies.",
  },
  {
    id: "i30",
    domain: "insights",
    prompt:
      "An email marketer notices a rising unsubscribe rate at the same time as open rates fall. Which TWO steps are part of a sound analysis? (Choose 2.)",
    choices: [
      { id: "a", text: "Compare engagement and unsubscribes by segment, source and send frequency to locate the cause" },
      { id: "b", text: "Review recent changes to content, audience selection or cadence" },
      { id: "c", text: "Disable the unsubscribe link" },
      { id: "d", text: "Send more emails to recover opens" },
    ],
    correct: ["a", "b"],
    why: "Segmenting results and correlating them with changes made helps pinpoint what drives the trend. Hiding unsubscribes or sending more worsens the situation.",
  },
];
