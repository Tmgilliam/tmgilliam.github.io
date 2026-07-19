# Awards pipeline schema

Track each candidate with these fields (roadmap issue body or project notes):

| Field | Description |
| --- | --- |
| Award | Exact program name |
| Awarding body | Organization that runs the program |
| Project or individual | Entity submitted |
| Category | Exact category name |
| Eligibility period | Year / cycle |
| Entry deadline | Primary and final dates |
| Entry fee | Amount or Not Applicable |
| Judging criteria | Link + summary of published criteria |
| Required evidence | Checklist of judge-facing artifacts |
| Submission owner | Named owner |
| Submission status | See statuses below |
| Result | Outcome when known |
| Public verification URL | Official result page when available |
| Next eligibility date | Next cycle if deferred or not selected |

## Statuses

```text
Research
Qualified
Evidence Gap
Preparing
Submitted
Finalist
Honoree
Winner
Not Selected
Deferred
```

## Display rules for `/recognition`

Never label a listing as award-winning unless status is `Winner` (or the program’s equivalent). Use exact program language for Finalist / Nominee / Honoree.
