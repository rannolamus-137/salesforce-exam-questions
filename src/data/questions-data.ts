import type { Question } from "./questions";

export const DATA: Question[] = [
  {
    id: "d13",
    domain: "data",
    prompt:
      "A retailer migrates its customer database into Marketing Cloud. Historically, customers were identified by email address, and two family members share one address. After the migration, the retailer wants each person to keep a separate unsubscribe status, engagement history and journey membership. What should be done?",
    choices: [
      { id: "a", text: "Use a unique customer ID as the Subscriber Key so each person stays distinct even with a shared address" },
      { id: "b", text: "Keep the email address as the Subscriber Key and add a second row for the second family member" },
      { id: "c", text: "Delete one of the two family members from the file so each address appears only once" },
      { id: "d", text: "Create two business units, one for each person, and import each person into their own" },
    ],
    correct: ["a"],
    why: "Subscriber Key is the identity of the person in Marketing Cloud. When it is the email address, two people sharing an address collapse into one subscriber, sharing status and history. A unique customer ID keeps them separate.",
  },
  {
    id: "d14",
    domain: "data",
    prompt:
      "A customer changes their email address from old@example.com to new@example.com. Their Subscriber Key is CUST-1007. The team imports the new address using CUST-1007 as the key. What is the result?",
    choices: [
      { id: "a", text: "The subscriber is updated with the new address, and history and status stay with CUST-1007" },
      { id: "b", text: "A second subscriber is created with the new address, and the old one is kept for history" },
      { id: "c", text: "The subscriber is automatically unsubscribed, because a changed address needs reconsent" },
      { id: "d", text: "The import fails because an email address cannot change once the subscriber exists" },
    ],
    correct: ["a"],
    why: "Because the key is stable, changing the email address is just an attribute update. That is the benefit of using a non-email Subscriber Key. If email were the key, the change would create a new subscriber and fragment history.",
  },
  {
    id: "d15",
    domain: "data",
    prompt:
      "A subscriber clicks the unsubscribe link in an email sent from Business Unit A and chooses 'Unsubscribe from this sender only'. They later receive an email from Business Unit B of the same enterprise. What is the expected behavior?",
    choices: [
      { id: "a", text: "They can still receive Business Unit B email, because the unsubscribe applied only to Business Unit A" },
      { id: "b", text: "They never receive mail from any business unit, because unsubscribes always apply account-wide" },
      { id: "c", text: "They are deleted from the account, together with their tracking history" },
      { id: "d", text: "Their status in All Subscribers becomes Held until they confirm their preferences" },
    ],
    correct: ["a"],
    why: "A business-unit-level unsubscribe records the opt-out for that business unit only. A global ('unsubscribe from all') action sets the subscriber's status to Unsubscribed in All Subscribers, which stops mail everywhere.",
  },
  {
    id: "d16",
    domain: "data",
    prompt:
      "A subscriber who chose 'Unsubscribe from all' appears again in a new import file and the import is configured to add and update. The marketer wants to be sure the person does not receive commercial email. Which statement is correct?",
    choices: [
      { id: "a", text: "Their status stays Unsubscribed unless explicitly reactivated, and sends honor it" },
      { id: "b", text: "Importing a record with the same key always resets its status to Active" },
      { id: "c", text: "Subscriber status is ignored at send time and only checked in reports" },
      { id: "d", text: "The import deletes the record and recreates it as a new, active subscriber" },
    ],
    correct: ["a"],
    why: "Subscriber status is stored on the subscriber and is respected at send time. A routine data import does not reactivate someone who opted out; reactivation must be a deliberate, consent-based action.",
  },
  {
    id: "d17",
    domain: "data",
    prompt:
      "A company stores a purchase date in a Date field in a data extension. A marketer imports a date as 2025-03-01 09:00 and later sees the value displayed as 2025-03-01 03:00 in a different system. What explains the difference?",
    choices: [
      { id: "a", text: "Marketing Cloud stores dates in Central Standard Time (UTC-6, no DST), so other zones appear shifted" },
      { id: "b", text: "Marketing Cloud rounds every stored time down to the nearest hour on import" },
      { id: "c", text: "Date fields drop the time zone because they are stored as plain text" },
      { id: "d", text: "The data extension is not sendable, so date values are shown in the sender's time zone" },
    ],
    correct: ["a"],
    why: "Marketing Cloud uses Central Standard Time year-round for stored date values. When integrating with systems in other time zones, convert at the boundary or account for the offset.",
  },
  {
    id: "d18",
    domain: "data",
    prompt:
      "An import file contains a Phone column with values like 0407 123 456 and the target data extension Phone field is a Phone type. Some rows fail. Which TWO actions help? (Choose 2.)",
    choices: [
      { id: "a", text: "Review the import error file to see which rows and values failed" },
      { id: "b", text: "Standardize the phone format in the source or change the field to Text if no strict validation is needed" },
      { id: "c", text: "Increase the subject line length" },
      { id: "d", text: "Rename the file with a longer name" },
    ],
    correct: ["a", "b"],
    why: "Import errors are reported at row level, and data types enforce formats. Fix the source values or choose a field type that fits the data. File names and subject lines are unrelated to row validation.",
  },
  {
    id: "d19",
    domain: "data",
    prompt:
      "A data extension is designed for a nightly import of orders. The key business rule is that an order ID is unique. Which field configuration is best?",
    choices: [
      { id: "a", text: "Make OrderID the primary key so duplicate order IDs update the existing row instead of creating a copy" },
      { id: "b", text: "Make Email the primary key so each customer appears once, even with several orders" },
      { id: "c", text: "Do not define a primary key, so that every import appends rows and keeps history" },
      { id: "d", text: "Make the order date the primary key so that rows are ordered by when they were placed" },
    ],
    correct: ["a"],
    why: "A primary key enforces uniqueness and enables upserts, so re-importing the same order updates it. Email or date are not unique to an order.",
  },
  {
    id: "d20",
    domain: "data",
    prompt:
      "A data extension holds website browsing events and grows by millions of rows a month. Rows older than 90 days are not needed. How should the table be managed?",
    choices: [
      { id: "a", text: "Configure a data retention policy to delete individual records after 90 days" },
      { id: "b", text: "Delete the rows manually at the end of each quarter, using a saved query" },
      { id: "c", text: "Never delete any data, because rows removed from a data extension cannot be reported on" },
      { id: "d", text: "Convert the data extension into a list, which clears old rows by itself" },
    ],
    correct: ["a"],
    why: "A retention policy on the data extension removes old rows automatically, which controls storage and keeps queries fast. Manual deletes are easy to forget and lists scale worse than data extensions.",
  },
  {
    id: "d21",
    domain: "data",
    prompt:
      "A data extension currently has no retention policy. A marketer sets 'Delete individual records' after 30 days. What will be deleted?",
    choices: [
      { id: "a", text: "Rows older than 30 days under the retention rule; the data extension structure stays" },
      { id: "b", text: "The entire data extension and its structure, once the 30-day window passes" },
      { id: "c", text: "Only the rows whose subscribers have unsubscribed during the last 30 days" },
      { id: "d", text: "Nothing, until the retention policy is deleted from the data extension" },
    ],
    correct: ["a"],
    why: "'Delete individual records' prunes old rows only. Other retention options delete all records or the whole data extension, so choose carefully.",
  },
  {
    id: "d22",
    domain: "data",
    prompt:
      "A marketing team wants an audience made up of subscribers who purchased in the last 30 days AND live in a state listed in a separate State_Regions data extension AND are not in a Do_Not_Contact data extension. Which tool is best suited to build this?",
    choices: [
      { id: "a", text: "A SQL Query activity that joins the three data extensions and writes to a sendable data extension" },
      { id: "b", text: "A simple data filter on one data extension, with the other tables added as criteria" },
      { id: "c", text: "A Random Split that divides the audience in proportion to each data extension" },
      { id: "d", text: "A publication list for each of the three data extensions, combined at send time" },
    ],
    correct: ["a"],
    why: "Joins across several data extensions, with exclusion logic, are what SQL queries do. Data filters work against a single data extension (or list) and cannot join multiple sources.",
  },
  {
    id: "d23",
    domain: "data",
    prompt:
      "A query uses LEFT JOIN to bring order details onto a subscriber table and returns far more rows than there are subscribers. What is the most likely cause?",
    choices: [
      { id: "a", text: "The orders table has multiple rows per subscriber, so each match creates another output row" },
      { id: "b", text: "LEFT JOIN removes rows that have no match, so the output should be smaller" },
      { id: "c", text: "The target data extension is sendable, which duplicates every row on write" },
      { id: "d", text: "SQL cannot join data extensions, so the result is a cross join of all rows" },
    ],
    correct: ["a"],
    why: "A one-to-many relationship multiplies rows in a join. Aggregate (for example the latest order per subscriber) or deduplicate before joining if one row per subscriber is needed.",
  },
  {
    id: "d24",
    domain: "data",
    prompt:
      "Which TWO data views would a marketer query to find subscribers who received an email but did not open or click it in the last 30 days? (Choose 2.)",
    choices: [
      { id: "a", text: "_Sent" },
      { id: "b", text: "_Open and _Click, joined on subscriber and job" },
      { id: "c", text: "_Journey" },
      { id: "d", text: "_BusinessUnitUnsubscribes" },
    ],
    correct: ["a", "b"],
    why: "_Sent lists who received messages, while _Open and _Click show engagement. A LEFT JOIN from sends to opens and clicks, filtered where the engagement rows are null, identifies the non-engagers. _Journey and the unsubscribe view answer different questions.",
  },
  {
    id: "d25",
    domain: "data",
    prompt:
      "An analyst wants to query send and open data from 14 months ago. The data views return nothing for that period. What is the reason?",
    choices: [
      { id: "a", text: "Tracking data views keep only a limited window (about six months); archive older history earlier" },
      { id: "b", text: "The query syntax is wrong, because older dates must be written in UTC" },
      { id: "c", text: "Data views are only available on the first day of each month and are cleared after" },
      { id: "d", text: "Data views contain only unsubscribed contacts, so the history is not there to query" },
    ],
    correct: ["a"],
    why: "System data views keep a rolling window of tracking data. For long-term analysis, schedule tracking extracts or queries that copy data into your own data extensions or a warehouse.",
  },
  {
    id: "d26",
    domain: "data",
    prompt:
      "A user wants to see every subscriber's current status (Active, Unsubscribed, Held, Bounced) using SQL. Which data view provides it?",
    choices: [
      { id: "a", text: "_Subscribers" },
      { id: "b", text: "_Sent" },
      { id: "c", text: "_Click" },
      { id: "d", text: "_Job" },
    ],
    correct: ["a"],
    why: "_Subscribers includes subscriber key, email address and status. _Sent, _Click and _Job describe sends and engagement, not subscriber status.",
  },
  {
    id: "d27",
    domain: "data",
    prompt:
      "A parent business unit has a data extension containing a master product catalog that multiple child business units must read. What is the recommended approach?",
    choices: [
      { id: "a", text: "Create the data extension in the Shared Data Extensions folder so the child business units can use it" },
      { id: "b", text: "Create a copy in every child business unit and maintain each copy by hand" },
      { id: "c", text: "Email the catalog to each business unit so they can import it into their own account" },
      { id: "d", text: "Use a publication list that holds one row per product for every business unit" },
    ],
    correct: ["a"],
    why: "Shared Data Extensions are accessible across business units in the enterprise, so one maintained copy serves everyone. Duplicating the data creates drift and extra work.",
  },
  {
    id: "d28",
    domain: "data",
    prompt:
      "A data extension is sendable. Its send relationship maps the field 'CustomerID' to Subscriber Key. A row has a CustomerID that does not exist in All Subscribers. What happens when a send includes that row?",
    choices: [
      { id: "a", text: "A subscriber record is created from the row's key and email address, and the send proceeds normally" },
      { id: "b", text: "The send is rejected for the entire audience, because one key is unknown" },
      { id: "c", text: "The row is deleted from the data extension because the key does not match a subscriber" },
      { id: "d", text: "The row is sent as an SMS instead because the subscriber record is missing" },
    ],
    correct: ["a"],
    why: "When sending to a data extension, a subscriber that is not yet in All Subscribers is created from the row's key and email address. This works only if the data extension is sendable, its send relationship points at the key field, and it has exactly one EmailAddress-type field.",
  },
  {
    id: "d29",
    domain: "data",
    prompt:
      "Customers can opt into 'Weekly Deals' and 'Monthly Digest' separately but must share one master record. Customer A unsubscribes from Weekly Deals via the subscription center only. What is the correct result?",
    choices: [
      { id: "a", text: "Customer A stays Active in All Subscribers, leaves Weekly Deals only, and still receives Monthly Digest" },
      { id: "b", text: "Customer A becomes Unsubscribed everywhere, because a single unsubscribe applies to all lists" },
      { id: "c", text: "Customer A is deleted from the account and removed from both publication lists" },
      { id: "d", text: "Customer A is placed in Held status until they confirm their remaining preferences" },
    ],
    correct: ["a"],
    why: "A publication-list unsubscribe is scoped to that list. Global unsubscribes affect the All Subscribers status and apply to all communications.",
  },
  {
    id: "d30",
    domain: "data",
    prompt:
      "A data extension is created with a text field of 50 characters (the default length) for customer comments. Imports begin failing for long comments. What is the correct fix?",
    choices: [
      { id: "a", text: "Increase the field length (within the allowed maximum) so it fits the longest comments" },
      { id: "b", text: "Reduce the file size so that long comments are split across several imports" },
      { id: "c", text: "Change the primary key to the comments field so that long text is allowed" },
      { id: "d", text: "Disable the import and have marketers enter the long comments manually" },
    ],
    correct: ["a"],
    why: "Text field length is defined when the field is created, and data longer than the length causes errors or truncation. Set a length that fits the data, within the platform limit.",
  },
  {
    id: "d31",
    domain: "data",
    prompt:
      "A user must follow a privacy request to remove a person's data from Marketing Cloud entirely, not just stop emailing them. Which action is appropriate?",
    choices: [
      { id: "a", text: "Use the contact delete process to remove the contact and associated data" },
      { id: "b", text: "Change the status to Unsubscribed, which removes the contact's personal data" },
      { id: "c", text: "Remove the person from a single publication list, which deletes their data" },
      { id: "d", text: "Suppress the person with an exclusion list, which also erases their profile data" },
    ],
    correct: ["a"],
    why: "Unsubscribing and suppressing keep a record so the opt-out can be honored. A deletion request calls for removing the contact's data through the contact delete process.",
  },
  {
    id: "d32",
    domain: "data",
    prompt:
      "A marketer wants to create a reusable group of subscribers from a data extension based on a filter, and have it refresh automatically before each send. Which approach is suitable?",
    choices: [
      { id: "a", text: "Create a filtered group and schedule a Refresh Group activity" },
      { id: "b", text: "Create a random group and schedule a Refresh Group activity to resample it" },
      { id: "c", text: "Use a Random Split in Journey Builder to refresh the group before each send" },
      { id: "d", text: "Export the filter to a file and import it into the group before each send" },
    ],
    correct: ["a"],
    why: "Filtered groups are driven by a data filter and can be refreshed with the Refresh Group activity so membership stays current. Random groups are for sampling.",
  },
  {
    id: "d33",
    domain: "data",
    prompt:
      "A list of 1.2 million addresses has been collected from many sources, and the team is worried about invalid syntax and risky addresses. Which TWO capabilities help? (Choose 2.)",
    choices: [
      { id: "a", text: "Email address validation to check syntax and domain on import" },
      { id: "b", text: "List screening for risky addresses such as known problem or trap domains" },
      { id: "c", text: "A larger IP pool" },
      { id: "d", text: "A longer subject line" },
    ],
    correct: ["a", "b"],
    why: "Validation reduces bounces from badly formed or non-existent domains, and list screening helps identify risky addresses before the first send. Neither IP size nor subject length cleans a list.",
  },
  {
    id: "d34",
    domain: "data",
    prompt:
      "A subscriber has hard bounced. Which statement correctly describes the effect?",
    choices: [
      { id: "a", text: "The address is considered undeliverable and future sends to that address are suppressed" },
      { id: "b", text: "The address is retried indefinitely until the mailbox provider accepts it" },
      { id: "c", text: "The address is automatically added to a publication list for undeliverable contacts" },
      { id: "d", text: "The subscriber is moved to a different business unit for reactivation" },
    ],
    correct: ["a"],
    why: "A hard bounce means a permanent delivery failure, such as a nonexistent mailbox. Marketing Cloud stops sending to it, protecting the sender's reputation. Soft bounces (temporary) are retried and can eventually lead to a held status.",
  },
  {
    id: "d35",
    domain: "data",
    prompt:
      "An email includes both the subscriber's 'First Name' and the subscriber's 'Favorite Category' from a profile attribute, and some subscribers have no first name. What data practice reduces errors?",
    choices: [
      { id: "a", text: "Maintain data quality at import, and use default values or AMPscript fallbacks for missing attributes" },
      { id: "b", text: "Send anyway; Marketing Cloud inserts a blank where the attribute is missing and nothing can go wrong" },
      { id: "c", text: "Delete the subscribers who have missing values so the audience stays complete" },
      { id: "d", text: "Remove personalization entirely, so the email never depends on subscriber data" },
    ],
    correct: ["a"],
    why: "Clean data at the source and design fallbacks so missing values do not produce awkward text. Deleting subscribers or removing personalization throws away value.",
  },
  {
    id: "d36",
    domain: "data",
    prompt:
      "A team imports 200,000 records into a list from a CSV and wants to prevent it from overwriting the status of subscribers who already unsubscribed. Which approach respects consent?",
    choices: [
      { id: "a", text: "Import with settings that leave existing status alone, so unsubscribed subscribers stay unsubscribed" },
      { id: "b", text: "Overwrite all statuses to Active so that the file matches the source system" },
      { id: "c", text: "Delete every subscriber from the list and re-import the whole file" },
      { id: "d", text: "Send to everyone in the file and wait for new unsubscribes to appear in reporting" },
    ],
    correct: ["a"],
    why: "Imports should never silently resubscribe someone who opted out. Use import options that leave existing status alone unless consent has been freshly obtained and recorded.",
  },
  {
    id: "d37",
    domain: "data",
    prompt:
      "An enterprise has a non-sendable data extension of customer purchases and a sendable data extension of customers. A journey must branch on 'total spend'. How is the data modeled for use in Journey Builder?",
    choices: [
      { id: "a", text: "Relate both data extensions to the contact in Contact Builder, or precompute total spend on the customer" },
      { id: "b", text: "Paste the total spend into the subject line so the Decision Split can read it from the message" },
      { id: "c", text: "Use two journeys, one for each data extension, and merge the paths later" },
      { id: "d", text: "Ignore the purchases data and branch on the email address domain instead" },
    ],
    correct: ["a"],
    why: "A journey can read related data through Contact Builder relationships. Precomputing aggregates such as total spend into a customer field with a scheduled query is often simpler and faster than joining at decision time.",
  },
  {
    id: "d38",
    domain: "data",
    prompt:
      "A sendable data extension has duplicate rows for the same SubscriberKey because the nightly import is set to Add Only and keeps appending. The marketer wants the latest values to replace older ones. What is the best fix?",
    choices: [
      { id: "a", text: "Set SubscriberKey as the primary key and change the import to Add and Update" },
      { id: "b", text: "Set the import to Overwrite and also delete the primary key" },
      { id: "c", text: "Add more fields to the table" },
      { id: "d", text: "Email the duplicates to the team" },
    ],
    correct: ["a"],
    why: "A primary key prevents duplicates, and Add and Update replaces existing values for matching keys. Overwrite would clear and reload the table, which is not required here.",
  },
  {
    id: "d39",
    domain: "data",
    prompt:
      "A customer data extension includes a Boolean field 'EmailOptIn'. The marketing team wants to ensure only opted-in customers are emailed, even if the data extension includes everyone. How can they enforce it?",
    choices: [
      { id: "a", text: "Select EmailOptIn = true in a filter or query, or use it as a journey entry criterion" },
      { id: "b", text: "Trust that the field is applied automatically, since Marketing Cloud reads every Boolean field" },
      { id: "c", text: "Email everyone, and hide the unsubscribe link for those whose EmailOptIn is false" },
      { id: "d", text: "Rename the field to Subscribed, which makes Marketing Cloud apply it to every send" },
    ],
    correct: ["a"],
    why: "Marketing Cloud does not apply custom fields automatically. The opt-in flag has to be used explicitly in a filter, a query or journey entry criteria.",
  },
  {
    id: "d40",
    domain: "data",
    prompt:
      "A data extension named Web_Leads is populated by a Smart Capture form. The marketing team wants to confirm that each lead has a valid email address and that sending is possible. Which settings matter?",
    choices: [
      { id: "a", text: "The data extension is sendable, has an email field, and its send relationship maps to the subscriber" },
      { id: "b", text: "The data extension has a long name, and the Smart Capture form uses a long button label" },
      { id: "c", text: "The data extension has a retention policy of one year so leads are not deleted too soon" },
      { id: "d", text: "The form uses a button, and the lead's email address is stored in a profile attribute" },
    ],
    correct: ["a"],
    why: "A sendable data extension needs an email address field and a mapped send relationship. Naming, retention and styling do not decide sendability.",
  },
  {
    id: "d41",
    domain: "data",
    prompt:
      "Marketing wants a list of subscribers who have the status Held so they can review them. What is the best way?",
    choices: [
      { id: "a", text: "Query the _Subscribers data view where Status is held and write the result to a data extension" },
      { id: "b", text: "Open each subscriber one by one in All Subscribers and write down who is Held" },
      { id: "c", text: "Send an email to the whole list and see which subscribers bounce as Held" },
      { id: "d", text: "Delete every subscriber and re-import the list so Held subscribers are removed" },
    ],
    correct: ["a"],
    why: "Status is queryable in the _Subscribers view. This provides a fast, repeatable report that can also feed a data extension for review or remediation.",
  },
  {
    id: "d42",
    domain: "data",
    prompt:
      "Which TWO best describe the difference between a list and a data extension? (Choose 2.)",
    choices: [
      { id: "a", text: "Data extensions are relational tables that scale better and support custom fields and queries" },
      { id: "b", text: "Lists store subscribers and their profile attributes in All Subscribers and are suited to subscription management" },
      { id: "c", text: "Lists can store unlimited relational tables" },
      { id: "d", text: "Data extensions can only store 100 rows" },
    ],
    correct: ["a", "b"],
    why: "Data extensions are flexible, high-volume tables, while lists are tied to All Subscribers and subscription management. The other statements are incorrect.",
  },
  {
    id: "d43",
    domain: "data",
    prompt:
      "A marketer wants to export all subscribers who clicked a link in the last week to an external system. Which TWO activities achieve this in Automation Studio? (Choose 2.)",
    choices: [
      { id: "a", text: "A Query on _Click filtered to the last 7 days that writes to a data extension" },
      { id: "b", text: "A Data Extract and File Transfer of that data extension" },
      { id: "c", text: "An Engagement Split" },
      { id: "d", text: "A Wait activity" },
    ],
    correct: ["a", "b"],
    why: "Use a query to produce the data and extract plus transfer to deliver it. Engagement Split is a Journey Builder activity and a Wait does not move data.",
  },
  {
    id: "d44",
    domain: "data",
    prompt:
      "A new account has Subscriber Key enabled. A marketer imports a list where the Subscriber Key column is blank for some rows. What happens?",
    choices: [
      { id: "a", text: "Rows without a Subscriber Key cannot be added and are reported as errors" },
      { id: "b", text: "Marketing Cloud invents keys" },
      { id: "c", text: "The rows are added with the email as key automatically in all cases" },
      { id: "d", text: "The whole account is locked" },
    ],
    correct: ["a"],
    why: "With Subscriber Key enabled, the key is required to identify the subscriber. Rows without it fail and show in the import errors.",
  },
  {
    id: "d45",
    domain: "data",
    prompt:
      "A team wants to give a sales user a subset of the subscriber data without exposing all customer attributes. Which Marketing Cloud capability supports this principle?",
    choices: [
      { id: "a", text: "Role-based permissions and folder-level access to restrict what users can see and do" },
      { id: "b", text: "Share a single login for the whole team so everyone sees the same data" },
      { id: "c", text: "Email exports of the subscriber data to all users on a regular basis" },
      { id: "d", text: "Disable tracking so that engagement data cannot be viewed by users" },
    ],
    correct: ["a"],
    why: "Roles and folder permissions limit access to data extensions and tools. Shared logins and widespread exports do the opposite.",
  },
  {
    id: "d46",
    domain: "data",
    prompt:
      "A marketer is importing a spreadsheet saved as CSV that contains 'é' and other accented characters. After import, characters appear garbled. What is the likely cause?",
    choices: [
      { id: "a", text: "The file encoding does not match the import's; save the file as UTF-8 and set the import to match" },
      { id: "b", text: "The email subject is too long, which makes the import mis-read special characters" },
      { id: "c", text: "The data extension has no retention policy, so accented values are discarded" },
      { id: "d", text: "The IP address is not warmed up, which corrupts accented characters during import" },
    ],
    correct: ["a"],
    why: "Garbled characters point to an encoding mismatch. Saving and importing as UTF-8 preserves accents and non-Latin characters.",
  },
];
