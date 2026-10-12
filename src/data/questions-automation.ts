import type { Question } from "./questions";

export const AUTOMATION: Question[] = [
  {
    id: "a13",
    domain: "automation",
    prompt:
      "A nightly automation has one step that contains three activities: (1) an Import File that loads the day's orders, (2) a Query that builds today's audience from those orders, and (3) a Send Email that mails that audience. Last night the email went to yesterday's audience and the import had not finished. What is the cause and the fix?",
    choices: [
      { id: "a", text: "Activities inside the same step run in parallel; place the import, the query and the send in three consecutive steps" },
      { id: "b", text: "Activities inside a step run in the order they are listed, so the Import File needs more time; add a Wait activity of one minute" },
      { id: "c", text: "Query activities always run before imports, so reorder them in the interface" },
      { id: "d", text: "Send Email activities cannot be in the same automation as an import; create a second automation" },
    ],
    correct: ["a"],
    why: "In Automation Studio, steps run sequentially but the activities within a single step run at the same time. Dependent work has to be in separate, ordered steps. A Wait activity would not make parallel activities sequential, and imports, queries and sends can live in one automation.",
  },
  {
    id: "a14",
    domain: "automation",
    prompt:
      "A journey sends an email on day 0 and should send a reminder only to contacts who did NOT click a link in that email, three days later. The designer places an Engagement Split directly after the email activity. Almost every contact goes down the 'did not click' path. Why?",
    choices: [
      { id: "a", text: "The split evaluates the moment contacts arrive, before they can click; add a Wait activity first" },
      { id: "b", text: "Engagement Splits can only evaluate opens, never clicks, so every contact is treated as a non-clicker" },
      { id: "c", text: "The journey needs a Random Split before the Engagement Split to separate engaged contacts" },
      { id: "d", text: "Click activity is recorded only after the journey ends, so the split can never see it" },
    ],
    correct: ["a"],
    why: "An Engagement Split looks at the engagement recorded at the time the contact reaches it. Without a preceding wait (for example three days), nobody has had the chance to click. Engagement Splits can evaluate opens, clicks and other engagement from a prior email in the journey.",
  },
  {
    id: "a15",
    domain: "automation",
    prompt:
      "A journey uses a data extension as its entry source. The marketer wants customers to be able to enter the journey again every time they have a new order, but never while they are already progressing through it. Which entry mode matches?",
    choices: [
      { id: "a", text: "Re-entry only after exiting" },
      { id: "b", text: "Re-entry anytime" },
      { id: "c", text: "No re-entry" },
      { id: "d", text: "Re-entry only after the journey is stopped" },
    ],
    correct: ["a"],
    why: "'Re-entry only after exiting' lets a contact enter again after leaving but blocks overlapping runs. 'Re-entry anytime' allows concurrent entries, and 'No re-entry' allows a single entry per contact key for the life of the journey.",
  },
  {
    id: "a16",
    domain: "automation",
    prompt:
      "A running journey needs a change to its first email. The marketer edits the journey and publishes it again. What happens to contacts who are already in the original version?",
    choices: [
      { id: "a", text: "A new version is created; contacts in the old version finish on it and new entries use the new one" },
      { id: "b", text: "All contacts are removed from the journey so the new version starts with an empty audience" },
      { id: "c", text: "All contacts restart at the beginning of the new version and receive the first email again" },
      { id: "d", text: "Editing a running journey is impossible; it must be deleted and rebuilt from scratch" },
    ],
    correct: ["a"],
    why: "Journey Builder versions a journey. Existing contacts continue through the old version until they exit, and the new version is used for new entries. The previous version can then be stopped when it has no contacts left.",
  },
  {
    id: "a17",
    domain: "automation",
    prompt:
      "Marketing wants to test three different follow-up emails in a journey, send each to a share of contacts, and have the journey automatically route the rest to whichever performed best by unique opens. Which activity fits?",
    choices: [
      { id: "a", text: "Path Optimizer" },
      { id: "b", text: "Random Split with fixed percentages" },
      { id: "c", text: "Decision Split" },
      { id: "d", text: "Update Contact" },
    ],
    correct: ["a"],
    why: "Path Optimizer tests multiple paths with a chosen winning metric and can automatically send remaining contacts down the winner. A Random Split divides contacts at fixed percentages but never chooses a winner, and a Decision Split uses data conditions.",
  },
  {
    id: "a18",
    domain: "automation",
    prompt:
      "A Decision Split in a journey refers to the attribute 'LoyaltyTier'. That attribute lives in a data extension that is not the entry source and is not linked in the contact model. The split's attribute list does not show it. What must be done?",
    choices: [
      { id: "a", text: "Add the data extension to an attribute group in Contact Builder and relate it to the contact" },
      { id: "b", text: "Retype the attribute name directly in the split, since Journey Builder resolves names at run time" },
      { id: "c", text: "Use an Engagement Split instead, which can read any data extension in the account" },
      { id: "d", text: "Copy the data extension into All Subscribers, which every Decision Split can read" },
    ],
    correct: ["a"],
    why: "Journey Builder can use attributes only from the entry source and from data that is linked to the contact through an attribute group in Contact Builder. Retyping the name does not create the relationship.",
  },
  {
    id: "a19",
    domain: "automation",
    prompt:
      "A subscriber's order data is held in three data extensions: Contacts, Orders (many per contact) and Products. A journey needs to branch on the most recent order's status. Which TWO elements are needed in the data model? (Choose 2.)",
    choices: [
      { id: "a", text: "A one-to-many relationship from Contacts to Orders in Contact Builder" },
      { id: "b", text: "A shared key (such as the contact key) present in the Orders data extension" },
      { id: "c", text: "A separate journey for each order" },
      { id: "d", text: "A suppression list for each product" },
    ],
    correct: ["a", "b"],
    why: "Journey Builder follows relationships defined in Contact Builder. The Orders data extension needs a field that links to the contact key and the relationship must be declared (one-to-many here) before the journey can use its data.",
  },
  {
    id: "a20",
    domain: "automation",
    prompt:
      "A bank sends an account-alert email from a journey when an external system calls the journey's API event with a contact key and fields. Alerts may be triggered for the same customer several times a day. Which entry setup is appropriate?",
    choices: [
      { id: "a", text: "An API event entry source with re-entry anytime" },
      { id: "b", text: "A data extension entry source with no re-entry" },
      { id: "c", text: "A Salesforce data entry source scheduled weekly" },
      { id: "d", text: "A file drop in Automation Studio only" },
    ],
    correct: ["a"],
    why: "An API event entry injects individual contacts in near real time as the external system fires. Because multiple alerts per customer are expected, entries must be allowed to repeat. No re-entry would block every alert after the first.",
  },
  {
    id: "a21",
    domain: "automation",
    prompt:
      "An abandoned-cart journey waits up to 24 hours for a purchase event. If the event arrives, the contact should leave the journey and not receive the reminder. If it does not, the reminder should be sent. Which design is best?",
    choices: [
      { id: "a", text: "Wait Until API Event with a timeout; the event path exits and the timeout path sends the reminder" },
      { id: "b", text: "A fixed Wait of 24 hours followed by the reminder, with the purchase event handled by a goal" },
      { id: "c", text: "A Random Split of 50/50 between sending the reminder and leaving the journey" },
      { id: "d", text: "A Decision Split on the contact's email address to identify people who have purchased" },
    ],
    correct: ["a"],
    why: "Wait Until API Event holds the contact until the event fires or the timeout elapses and gives separate paths for each outcome. A plain wait cannot react to the purchase, and a random split ignores behavior altogether.",
  },
  {
    id: "a22",
    domain: "automation",
    prompt:
      "A company wants to stop messaging any contact in a journey once they join the loyalty program, at any point in the journey, without adding a decision split before every step. Which feature is built for this?",
    choices: [
      { id: "a", text: "Exit criteria on the journey" },
      { id: "b", text: "A suppression list on every email" },
      { id: "c", text: "A Random Split at the start" },
      { id: "d", text: "Re-entry anytime" },
    ],
    correct: ["a"],
    why: "Exit criteria are evaluated while contacts are in the journey and remove them when the condition is met. This avoids repeating decision splits and keeps the canvas clean.",
  },
  {
    id: "a23",
    domain: "automation",
    prompt:
      "A journey's goal is 'Purchase'. The marketer wants to measure conversion but does not want to remove contacts from the journey when they purchase; they should still receive a thank-you email in the same journey. How should the goal and exit be configured?",
    choices: [
      { id: "a", text: "Define the goal for reporting and do not enable exit on goal" },
      { id: "b", text: "Define the goal and always exit contacts the moment they reach it" },
      { id: "c", text: "Remove the goal because journeys cannot measure conversion" },
      { id: "d", text: "Use a separate journey for each outcome" },
    ],
    correct: ["a"],
    why: "A goal records conversion statistics and optionally exits contacts when it is met. Leaving the exit option off lets contacts continue to later steps such as a thank-you message while conversion is still measured.",
  },
  {
    id: "a24",
    domain: "automation",
    prompt:
      "An automation should import a file, then run a query that joins the imported data to the customer table and writes to a target data extension. The query must replace the target's contents each day. Which query data action should be selected?",
    choices: [
      { id: "a", text: "Overwrite" },
      { id: "b", text: "Append" },
      { id: "c", text: "Update" },
      { id: "d", text: "Delete" },
    ],
    correct: ["a"],
    why: "Overwrite clears the target data extension and writes the query results. Append adds rows and Update changes existing rows by primary key without removing others. Using Append here would let yesterday's rows pile up.",
  },
  {
    id: "a25",
    domain: "automation",
    prompt:
      "A SQL Query activity is saved with a statement that includes an UPDATE ... SET command to modify a data extension. The activity fails validation. What should the marketer do?",
    choices: [
      { id: "a", text: "Rewrite it as a SELECT and write the results to the target data extension with an Update or Overwrite action" },
      { id: "b", text: "Wrap the UPDATE in a stored procedure, which Query activities are able to call" },
      { id: "c", text: "Move the statement into the subject line of an email that runs after the import" },
      { id: "d", text: "Convert the activity into a Verification activity that applies the changes to the data extension" },
    ],
    correct: ["a"],
    why: "Marketing Cloud SQL Query activities accept SELECT statements only. Data changes are achieved by selecting the desired result and choosing how it is written to the target (overwrite, append or update).",
  },
  {
    id: "a26",
    domain: "automation",
    prompt:
      "An automation's SQL query joins the _Sent data view to a customer data extension. It begins failing with a timeout after the customer table grows. Which TWO changes are most likely to help? (Choose 2.)",
    choices: [
      { id: "a", text: "Filter the data view by a date range (for example the last 7 days) instead of scanning all of it" },
      { id: "b", text: "Select only the columns needed and join on indexed or primary-key fields" },
      { id: "c", text: "Add SELECT * to every table" },
      { id: "d", text: "Remove the target data extension" },
    ],
    correct: ["a", "b"],
    why: "Queries have a time limit, so reduce the data processed: limit the date range of data views and limit columns and joins to what is needed. SELECT * on large tables does the opposite, and the target is required to save results.",
  },
  {
    id: "a27",
    domain: "automation",
    prompt:
      "A retailer drops a file named orders_20250115.csv on the Enhanced FTP each day with the date in the name. The automation must start only after the file arrives, and the name changes daily. Which setup works?",
    choices: [
      { id: "a", text: "A File Drop automation with a date-pattern file name, followed by the import" },
      { id: "b", text: "A scheduled automation that imports a fixed file named orders.csv at a set time each day" },
      { id: "c", text: "A journey with a Wait activity that checks the Enhanced FTP for new files every hour" },
      { id: "d", text: "A triggered send definition that reads the file name from the FTP and starts the import" },
    ],
    correct: ["a"],
    why: "File Drop automations start when a matching file appears, and naming patterns with date placeholders cope with changing names. A fixed file name or a time-based wait would miss or mismatch files.",
  },
  {
    id: "a28",
    domain: "automation",
    prompt:
      "An automation is scheduled to run every hour. Today a run took 75 minutes because of a large file. What will the next hourly run do?",
    choices: [
      { id: "a", text: "It is skipped because the automation is still running; it does not start a second concurrent instance" },
      { id: "b", text: "It starts and runs in parallel with the first run, so both write to the target at once" },
      { id: "c", text: "It cancels the first run and restarts the automation from the first step" },
      { id: "d", text: "It waits for the first run to finish and then runs twice in a row to catch up" },
    ],
    correct: ["a"],
    why: "Automation Studio will not run an automation that is already running; the overlapping scheduled run is skipped. Design schedules with enough room for the longest expected duration.",
  },
  {
    id: "a29",
    domain: "automation",
    prompt:
      "A tracking data extract is configured to export send and open data to a file for a data warehouse. The warehouse reads files only from an external SFTP server. Which activities complete the automation?",
    choices: [
      { id: "a", text: "Data Extract to create the file in the Safehouse, then File Transfer to move it to the external location" },
      { id: "b", text: "Import File only, which reads the tracking data and sends it to the external location" },
      { id: "c", text: "Send Email to the warehouse team with the tracking data attached as a file" },
      { id: "d", text: "A Decision Split that routes the tracking data to the warehouse's SFTP location" },
    ],
    correct: ["a"],
    why: "Data Extract produces the file, and File Transfer moves it from the Safehouse to an FTP location. Import loads files in, and sending an email does not deliver data to an SFTP server.",
  },
  {
    id: "a30",
    domain: "automation",
    prompt:
      "A scheduled automation imports a customer file and then sends a promotional email to the resulting data extension. A rare failure means the file arrives empty. The business wants the send to be blocked when the data extension contains fewer than 1,000 rows. What should be added after the import?",
    choices: [
      { id: "a", text: "A Verification activity on the row count that stops the automation below the threshold" },
      { id: "b", text: "A Wait activity of one hour, which gives the file time to finish loading" },
      { id: "c", text: "A Random Split that sends the email to a sample if the row count looks low" },
      { id: "d", text: "A second Import activity that loads the same file again before the send step" },
    ],
    correct: ["a"],
    why: "Verification activities evaluate conditions such as row count before later steps run. If the check fails, the automation stops with an error rather than sending to an empty or incomplete audience.",
  },
  {
    id: "a31",
    domain: "automation",
    prompt:
      "When an automation fails at step 3, what is the default behavior and what can the marketer configure?",
    choices: [
      { id: "a", text: "The automation stops at the failed step and can notify designated recipients on error or completion" },
      { id: "b", text: "The automation skips the failed step and continues silently, with errors visible only in a log" },
      { id: "c", text: "The automation restarts from step one automatically until every activity succeeds" },
      { id: "d", text: "The automation is deleted after a failure so the same error does not recur" },
    ],
    correct: ["a"],
    why: "Automation Studio halts on a failing step, which protects later steps from working with bad data. Notification emails can be set for errors and completion so the team knows to investigate.",
  },
  {
    id: "a32",
    domain: "automation",
    prompt:
      "A marketer needs a quick segment without writing SQL: customers in a data extension where State = 'CA' AND Opted_In = true. The result must be stored in a new data extension on a schedule. Which activity fits best?",
    choices: [
      { id: "a", text: "A Filter activity based on a data filter definition" },
      { id: "b", text: "A Verification activity that checks the State and Opted_In values and reports the count" },
      { id: "c", text: "A Data Extract that exports only the California rows to a file in the Safehouse" },
      { id: "d", text: "A File Transfer that moves the matching rows to a new data extension" },
    ],
    correct: ["a"],
    why: "The Filter activity runs a saved filter definition and writes the matching records into a target data extension on schedule, without SQL. Use a Query activity when joins or complex logic are required.",
  },
  {
    id: "a33",
    domain: "automation",
    prompt:
      "An automation sends a user-initiated email each morning. The marketer wants to stop the automation from sending if an upstream import has failed. Which statement about Automation Studio is correct?",
    choices: [
      { id: "a", text: "Because the automation stops at the failed import step, later steps such as the send will not run" },
      { id: "b", text: "The send always runs even if the import fails, using whatever data was loaded previously" },
      { id: "c", text: "The send runs but only to the half of the audience that was already loaded" },
      { id: "d", text: "The send waits and runs once the import has been retried ten times automatically" },
    ],
    correct: ["a"],
    why: "A failing activity halts the automation from that step onward, so the send step is not reached. This behavior is why imports and queries are normally placed in earlier steps.",
  },
  {
    id: "a34",
    domain: "automation",
    prompt:
      "An email must be sent when a customer's birthday arrives each year. The birthday is stored in a data extension. Which approach is most robust?",
    choices: [
      { id: "a", text: "A daily query selecting today's birthdays into a data extension used as the entry source" },
      { id: "b", text: "A manual send every morning by a marketer who checks the birthdays list" },
      { id: "c", text: "A single scheduled send to the entire list in January with a birthday-themed banner" },
      { id: "d", text: "A weekly newsletter that mentions upcoming birthdays among other content" },
    ],
    correct: ["a"],
    why: "Calendar-driven audiences are best built by a daily query that selects the matching records and feeds the send or journey. Manual processes are error-prone and one-time sends cannot cover every date.",
  },
  {
    id: "a35",
    domain: "automation",
    prompt:
      "A nightly automation runs a Query activity that builds tomorrow's audience in a data extension. A journey uses that data extension as an Event-based entry source, and the team wants contacts admitted immediately after the query finishes, not on a separate clock time that might fire before the query is done. What should be added to the automation?",
    choices: [
      { id: "a", text: "A Fire Event activity in a step after the query, which admits the contacts to the journey" },
      { id: "b", text: "A second Query activity in the same step as the first, which pushes the rows into the journey" },
      { id: "c", text: "A Wait activity of two hours followed by a Verification activity on the journey" },
      { id: "d", text: "A Filter activity that copies the audience into the journey's goal definition" },
    ],
    correct: ["a"],
    why: "The Fire Event activity in Automation Studio triggers a journey event for the contacts in the data extension, so entry happens right after the preceding step completes. Putting it in a later step guarantees the query has finished first, whereas same-step activities run in parallel.",
  },
  {
    id: "a36",
    domain: "automation",
    prompt:
      "A data extension entry source for a journey adds 500,000 records every Monday. The journey is set to recurring entry. Some records were already processed the previous week. How can the marketer avoid re-evaluating old records?",
    choices: [
      { id: "a", text: "Evaluate only new records on the entry schedule and use re-entry rules to stop contacts entering again" },
      { id: "b", text: "Delete the data extension every Monday and recreate it so that no old records are evaluated" },
      { id: "c", text: "Use a Random Split at the start so that only some records are evaluated each week" },
      { id: "d", text: "Reduce the Subscriber Key length so old records no longer match the entry criteria" },
    ],
    correct: ["a"],
    why: "Entry schedules can be set to evaluate new records, and the journey's re-entry mode governs whether a known contact can enter again. Together they stop duplicate processing of old rows.",
  },
  {
    id: "a37",
    domain: "automation",
    prompt:
      "A journey updates a customer's 'LastEmailedDate' in a data extension after each email. Which journey activity accomplishes that?",
    choices: [
      { id: "a", text: "Update Contact (or an Update Data Extension activity) after the email" },
      { id: "b", text: "An Engagement Split that updates the date for contacts who opened the email" },
      { id: "c", text: "A Wait by Duration that records the time the contact reached the activity" },
      { id: "d", text: "A Goal that stores the send date whenever a contact reaches the end of the journey" },
    ],
    correct: ["a"],
    why: "Update Contact writes values back to contact data within the journey. Splits and waits route or delay contacts but do not write data.",
  },
  {
    id: "a38",
    domain: "automation",
    prompt:
      "A new journey is ready, and the team wants to validate every path before it goes live without sending to real customers. What is the recommended step?",
    choices: [
      { id: "a", text: "Use the journey's test mode with a small number of test contacts, and validate before activation" },
      { id: "b", text: "Activate the journey for a small group of real customers and monitor complaints closely" },
      { id: "c", text: "Run each activity separately in Automation Studio before building the journey" },
      { id: "d", text: "Disable the unsubscribe link so test sends do not affect real subscriber status" },
    ],
    correct: ["a"],
    why: "Test mode lets you inject test contacts and watch them traverse each path, and validation catches configuration errors before activation. Testing in production risks sending unintended messages.",
  },
  {
    id: "a39",
    domain: "automation",
    prompt:
      "A subscription company wants to send each subscriber a renewal reminder 30 days before their renewal date, which is stored in a data extension. Which Journey Builder feature supports sending relative to a date?",
    choices: [
      { id: "a", text: "A Wait by Attribute activity based on the renewal date attribute" },
      { id: "b", text: "A Random Split that sends the reminder to contacts at a randomly chosen point in time" },
      { id: "c", text: "An Engagement Split that waits until the contact has engaged with the previous email" },
      { id: "d", text: "A Goal that fires when the renewal date is within the next thirty days" },
    ],
    correct: ["a"],
    why: "Wait by Attribute holds a contact until a date stored on the contact (offset by a chosen duration). It is the standard approach for date-driven reminders.",
  },
  {
    id: "a40",
    domain: "automation",
    prompt:
      "A company processes 50 triggered 'order shipped' emails per second in peak. The email must use the order details passed in from the website without storing them in a data extension first. Which feature supports passing data in the call?",
    choices: [
      { id: "a", text: "A triggered send or transactional API call that includes attributes in the request payload" },
      { id: "b", text: "A weekly scheduled send that reads all of the previous week's order data from a data extension" },
      { id: "c", text: "A Random Split that distributes the order details between several emails" },
      { id: "d", text: "A Verification activity that checks the order details before each email is sent" },
    ],
    correct: ["a"],
    why: "Triggered and transactional sends accept attribute values in the request and merge them into the email at send time, which suits high-volume, one-to-one messages.",
  },
  {
    id: "a41",
    domain: "automation",
    prompt:
      "Which TWO statements about Automation Studio and Journey Builder are accurate? (Choose 2.)",
    choices: [
      { id: "a", text: "Automation Studio is built for scheduled or file-triggered batch work such as imports, queries and extracts" },
      { id: "b", text: "Journey Builder is built for one-to-one, event-driven, multi-step customer experiences" },
      { id: "c", text: "Journey Builder is used to run SQL queries" },
      { id: "d", text: "Automation Studio shows each individual contact's path through a customer experience" },
    ],
    correct: ["a", "b"],
    why: "Automation Studio orchestrates data and send tasks on a schedule or file trigger. Journey Builder models a contact's progress through a multi-step experience in response to behavior or data. SQL queries and contact-level paths belong to the other tool respectively.",
  },
  {
    id: "a42",
    domain: "automation",
    prompt:
      "A marketing team wants a customer to receive a different second email based on whether they opened the first. The first email is in a journey. The marketer wants this to be decided after a two-day wait. Which sequence is correct?",
    choices: [
      { id: "a", text: "Email, Wait 2 days, Engagement Split (opened / did not open), then the matching emails" },
      { id: "b", text: "Email, Engagement Split, Wait two days, then separate emails on each path" },
      { id: "c", text: "Wait two days, Email, Engagement Split, then separate emails on each path" },
      { id: "d", text: "Engagement Split, Email, Wait two days, then separate emails on each path" },
    ],
    correct: ["a"],
    why: "The Engagement Split needs the earlier email to exist and some time to pass; otherwise nobody has opened yet. The wait comes first, then the split, then each branch's email.",
  },
  {
    id: "a43",
    domain: "automation",
    prompt:
      "An Import File activity loads a CSV into a data extension with Subscriber Key as the primary key. The CSV contains new customers and existing customers whose phone numbers changed. Existing rows must be updated and new rows added. Which data action should be set?",
    choices: [
      { id: "a", text: "Add and Update" },
      { id: "b", text: "Overwrite" },
      { id: "c", text: "Add Only" },
      { id: "d", text: "Delete" },
    ],
    correct: ["a"],
    why: "Add and Update matches on the primary key, updating existing rows and inserting new ones. Overwrite would replace everything, and Add Only would leave the existing rows unchanged.",
  },
  {
    id: "a44",
    domain: "automation",
    prompt:
      "A journey has a Decision Split with two paths: Region = East and Region = West. Some contacts have a blank Region, and others have 'Central'. A marketer expected the journey to error for them. What actually happens to those contacts?",
    choices: [
      { id: "a", text: "They take the remainder path, which catches contacts matching none of the defined paths" },
      { id: "b", text: "They are removed from the journey as soon as they reach the split" },
      { id: "c", text: "They are routed to the first path because that is the default" },
      { id: "d", text: "The journey pauses until the Region value is filled in" },
    ],
    correct: ["a"],
    why: "A Decision Split always has a remainder path for contacts that fit no criteria. If nothing is connected to it, contacts simply leave the journey there, so design a useful remainder path when blank or unexpected values are possible.",
  },
  {
    id: "a45",
    domain: "automation",
    prompt:
      "A journey's entry data extension is populated from two systems: the web store supplies a customer ID in the ContactKey column, while a call-centre import supplies the customer's email address in the same column. The same person now appears as two different contacts in Journey Builder and receives the welcome email twice. What is the correct fix?",
    choices: [
      { id: "a", text: "Use one unique, stable identifier such as the customer ID as the Contact Key in every source" },
      { id: "b", text: "Switch the journey to Re-entry anytime so duplicates are merged on the next entry" },
      { id: "c", text: "Add a Decision Split on email address at the start of the journey to drop the duplicates" },
      { id: "d", text: "Use a Random Split so that only one of the two contacts is likely to receive the email" },
    ],
    correct: ["a"],
    why: "Journey Builder treats each distinct Contact Key as a different person. Mixing identifiers creates duplicate contacts, split history and double sends. The key must be consistent across sources and match the Subscriber Key. Entry mode and splits do not merge contacts.",
  },
  {
    id: "a46",
    domain: "automation",
    prompt:
      "Which TWO tools can be used to start a Journey Builder journey for contacts stored in a data extension? (Choose 2.)",
    choices: [
      { id: "a", text: "A data extension entry source with a configured schedule" },
      { id: "b", text: "An automation that populates the data extension and fires the journey on a schedule" },
      { id: "c", text: "A Verification activity" },
      { id: "d", text: "A suppression list" },
    ],
    correct: ["a", "b"],
    why: "A journey can use a data extension as its entry source on a schedule, and Automation Studio can prepare that data (and fire the journey) as part of a larger flow. Verification and suppression lists do not start journeys.",
  },
];
