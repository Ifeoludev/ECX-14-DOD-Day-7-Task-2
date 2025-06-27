I programmed a simple, responsive web tool for converting between Roman numerals and Arabic numbers (1–1000). Built with HTML, CSS, and JavaScript


Features
Convert both ways: Roman ? Arabic

Single Convert Button: Prevents instant feedback overload

Arabic (1–1000)

Canonical Roman numerals (I to M only)


Thought Process
1. Interface Design
Used a card layout for visual appeal.

Fields for Roman and Arabic inputs, with descriptive labels.

"Convert" button to trigger action instead of instant sync — better control for users.

Responsive layout via Flexbox.

2. Conversion Logic
Arabic ? Roman: Loop through Roman values from highest to lowest and subtract.

Roman ? Arabic: Parse two-character pairs first (IX, CM), then singles (V, X).

Ensured valid Roman numerals using strict back-conversion match:
