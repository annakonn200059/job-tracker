import type { Account, User } from "next-auth"
import type { Credentials } from "@/lib/validations/auth"

// TODO: point at the real backend and wire up the actual request once the API is ready.
export async function loginWithBackend(
  credentials: Credentials
): Promise<User | null> {
  throw new Error("loginWithBackend is not implemented yet")
}

// TODO: point at the real backend and wire up the actual request once the API is ready.
export async function syncGoogleUser({
  user,
  account,
}: {
  user: User
  account: Account | null
}): Promise<void> {
  return
}
