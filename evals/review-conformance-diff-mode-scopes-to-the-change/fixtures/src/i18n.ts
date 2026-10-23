const strings: Record<string, string> = {
  "members.title": "Members",
  "members.invite": "Invite",
  "invite.title": "Invite people",
  "invite.email.label": "Email address",
  "invite.send": "Invite",
  "invite.sending": "Sending…",
  "invite.cancel": "Cancel",
  "invite.success": "Invitation sent to {email}",
  "invite.error.generic": "The invitation could not be sent. Check the address and try again.",
  "invite.copy": "Send me a copy",
  "board.rename": "Rename",
  "board.rename.prompt": "New board name",
  "board.rename.failed": "The board could not be renamed.",
};

export function t(key: string, params: Record<string, string | number> = {}): string {
  let text = strings[key] ?? key;
  for (const [name, value] of Object.entries(params)) text = text.replace(`{${name}}`, String(value));
  return text;
}
