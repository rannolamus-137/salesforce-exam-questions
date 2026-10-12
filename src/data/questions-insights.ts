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
      "A newsletter shows: sent 200,000; bounced 6,000; unique opens 58,200; total opens 131,000; unique clicks 4,850; total clicks 9,900. Which TWO calculations are correct? (Choose 2.)",
    choices: [
      { id: "a", text: "Unique open rate on delivered is 58,200 / 194,000 = 30%" },
      { id: "b", text: "Click-to-open rate is 4,850 / 58,200 ≈ 8.3%" },
      { id: "c", text: "Unique open rate on delivered is 131,000 / 194,000 ≈ 67.5%" },
      { id: "d", text: "Click-through rate on delivered is 9,900 / 200,000 ≈ 5%" },
    ],
    correct: ["a", "b"],
    why: "Delivered = 200,000 − 6,000 = 194,000, so the unique open rate is 58,200 / 194,000 = 30%. Click-to-open uses unique clicks over unique opens: 4,850 / 58,200 ≈ 8.3%. Total opens and total clicks count repeats, and the 5% figure also mixes totals with sent.",
  },
  {
    id: "i14",
    domain: "insights",
    prompt:
      "After a send, a marketer sees 12,000 contacts in the audience data extension but only 11,200 'sent' in the tracking summary. A Not Sent extract shows 500 skipped for 'Unsubscribed' or 'Held' status and 300 for 'Excluded by exclusion list'. Which interpretation is correct?",
    choices: [
      { id: "a", text: "Subscriber status and the exclusion list explain the gap; there is no delivery fault" },
      { id: "b", text: "The 800 missing sends are bounces and should be added to the bounce total in the report" },
      { id: "c", text: "The platform dropped 800 messages, so the send should be repeated to the entire audience" },
      { id: "d", text: "The exclusion list entries are a data error because exclusions never reduce the sent count" },
    ],
    correct: ["a"],
    why: "Contacts skipped for status or exclusion are never sent, so they appear in Not Sent data, not in bounces. Reconciling the audience count with sent, bounced and not-sent totals is the standard check for send discrepancies. Re-sending to everyone would mail people who were deliberately excluded.",
  },
  {
    id: "i15",
    domain: "insights",
    prompt:
      "A marketer wants to understand why an email underperformed compared with the previous campaign. Which ordered approach best follows a sound analysis process?",
    choices: [
      { id: "a", text: "Check delivery, then engagement, then conversions, and compare against benchmarks and prior sends" },
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
      "Leadership wants a performance report on all commercial emails sent in a quarter, with delivery rate, unique open rate, click-to-open rate and unsubscribes, delivered to a distribution list every Monday at 7:00 without anyone running it by hand. Which approach meets this?",
    choices: [
      { id: "a", text: "Build or pick the report in Reports and schedule it to recur, with recipients and output format" },
      { id: "b", text: "Create a journey that emails a screenshot of the Tracking tab to the distribution list each week" },
      { id: "c", text: "Export a tracking extract manually every Sunday and attach it to an email for leadership" },
      { id: "d", text: "Create a data filter that selects the quarter's sends and set it to refresh every Monday" },
    ],
    correct: ["a"],
    why: "Reports can be saved and scheduled for recurring delivery to chosen recipients, which removes manual steps. A data filter segments subscribers; it does not generate a performance report. Manual exports defeat the requirement.",
  },
  {
    id: "i17",
    domain: "insights",
    prompt:
      "A team compares two subject lines on a 20% test sample. Version A: 2,000 delivered, 440 unique opens. Version B: 2,000 delivered, 480 unique opens. A manager wants to declare B the winner and send it to the remaining 80%. Which statement is the soundest?",
    choices: [
      { id: "a", text: "B leads, 24% to 22%, but the gap may be normal variation; confirm random sampling and sample size first" },
      { id: "b", text: "B is the winner because any positive difference between two versions proves the subject line caused it" },
      { id: "c", text: "The test is invalid because both samples must contain exactly the same people, which can never happen" },
      { id: "d", text: "The winner should be decided by total opens instead, since unique opens undercount engaged subscribers" },
    ],
    correct: ["a"],
    why: "24% vs 22% is a small difference on 2,000 each, so judge it with random sampling and enough volume or a longer window. Opens can also be inflated by privacy features, so clicks are a stronger winner metric where possible. Any lead does not prove causation.",
  },
  {
    id: "i18",
    domain: "insights",
    prompt:
      "A marketer wants a campaign-effectiveness view of which emails to send to which subscribers next quarter. Which TWO Einstein capabilities directly help analyze or act on campaign effectiveness? (Choose 2.)",
    choices: [
      { id: "a", text: "Einstein Messaging Insights, which flags statistically unusual changes in opens, clicks and unsubscribes" },
      { id: "b", text: "Einstein Engagement Scoring, which predicts each subscriber's likelihood to open, click and unsubscribe" },
      { id: "c", text: "Einstein Content Tagging, which writes the subject lines for the next campaign" },
      { id: "d", text: "Einstein Send Time Optimization, which reports why previous subject lines underperformed" },
    ],
    correct: ["a", "b"],
    why: "Messaging Insights surfaces performance anomalies and Engagement Scoring predicts subscriber behavior for targeting. Content Tagging labels image content, and Send Time Optimization chooses delivery time; neither explains campaign performance.",
  },
  {
    id: "i19",
    domain: "insights",
    prompt:
      "A company sees Subscriber A listed as having clicked a link in a report, yet the click was recorded within one second of delivery, and several other subscribers at the same company show the same pattern. What is the likely explanation?",
    choices: [
      { id: "a", text: "Security scanners at the recipient's gateway followed the links, producing non-human clicks" },
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
      { id: "a", text: "Check the subscriber's status, any suppression or exclusion applied, and the send and bounce records" },
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
      "Marketing wants to know which words and emotional tones in past subject lines correlate with higher opens, and to test draft subject lines against that history before the next send. Which Einstein product provides both?",
    choices: [
      { id: "a", text: "Einstein Copy Insights" },
      { id: "b", text: "Einstein Engagement Frequency" },
      { id: "c", text: "Einstein Content Selection" },
      { id: "d", text: "Einstein Messaging Insights" },
      { id: "e", text: "Einstein Recommendations" },
    ],
    correct: ["a"],
    why: "Copy Insights analyzes the language of past subject lines against engagement and includes a way to check draft subject lines. Engagement Frequency estimates saturation, Content Selection picks assets, Messaging Insights flags anomalies and Recommendations suggests items.",
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
      "A retailer's open rate has climbed from 22% to 41% over a year, while click-to-open rate fell from 14% to 7% and revenue per send is flat. About half the list uses Apple Mail. What is the most defensible next step?",
    choices: [
      { id: "a", text: "Treat opens as inflated by privacy pre-fetching and judge by clicks, conversions and revenue" },
      { id: "b", text: "Conclude subject lines have improved and apply the same tactic to every send" },
      { id: "c", text: "Switch all reporting to total opens, which are less affected by Apple Mail" },
      { id: "d", text: "Delete the Apple Mail subscribers, because their opens contaminate the data" },
    ],
    correct: ["a"],
    why: "Rising opens with falling click-to-open and flat revenue is the classic signature of inflated opens from privacy features. Outcome metrics (clicks, conversions, revenue) are the reliable guide. Total opens are inflated too, and deleting subscribers is unnecessary.",
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
      "An unsubscribe rate doubles from 0.2% to 0.4% in one month while the open rate stays flat. Complaints are stable. Which TWO analysis steps are the most useful? (Choose 2.)",
    choices: [
      { id: "a", text: "Segment unsubscribes by send, source and frequency to see whether a specific campaign, acquisition source or cadence change drives it" },
      { id: "b", text: "Check what changed in targeting and send cadence that month, and compare the preference-center options subscribers had" },
      { id: "c", text: "Remove the unsubscribe link from the next send to see whether the metric changes" },
      { id: "d", text: "Assume it is seasonal noise and wait three months before taking any action" },
    ],
    correct: ["a", "b"],
    why: "Locate the pattern first: by campaign, source and cadence, and alongside any change you made. Hiding the unsubscribe link harms compliance and trust, and passively waiting forfeits the chance to fix a fixable cause.",
  },
];
