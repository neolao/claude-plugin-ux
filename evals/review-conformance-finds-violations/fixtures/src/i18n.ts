const strings: Record<string, string> = {
  "members.title": "Members",
  "members.invite": "Invite",
  "invite.title": "Invite a member",
  "invite.email.label": "Email address",
  "invite.email.invalid": "Enter a valid email address",
  "invite.send": "Invite member",
  "invite.sending": "Sending…",
  "invite.cancel": "Cancel",
  "invite.success": "Invitation sent to {email}",
  "invite.error.generic": "The invitation could not be sent. Check the address and try again.",
  "invite.csv.label": "Import members from a CSV file",
  "invite.csv.done": "{count} members imported",
};

export function t(key: string, params: Record<string, string | number> = {}): string {
  let text = strings[key] ?? key;
  for (const [name, value] of Object.entries(params)) text = text.replace(`{${name}}`, String(value));
  return text;
}
