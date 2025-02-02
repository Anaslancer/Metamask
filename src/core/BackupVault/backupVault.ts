import { KeyringControllerState } from '@metamask/keyring-controller';
import {
  getInternetCredentials,
  setInternetCredentials,
  resetInternetCredentials,
  Options,
  ACCESSIBLE,
} from 'react-native-keychain';
import {
  VAULT_BACKUP_FAILED,
  VAULT_BACKUP_FAILED_UNDEFINED,
  VAULT_FAILED_TO_GET_VAULT_FROM_BACKUP,
} from '@/src/constants/error';

const VAULT_BACKUP_KEY = 'VAULT_BACKUP';

const options: Options = {
  accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
};

interface KeyringBackupResponse {
  success: boolean;
  vault?: string;
  error?: string;
}

/**
 * places the vault in react-native-keychain for backup
 * @returns Promise<KeyringBackupResponse>
  interface KeyringBackupResponse {
    success: boolean;
    error?: string;
    vault?: string;
  }
 */
export async function backupVault(
  keyringState: KeyringControllerState,
): Promise<KeyringBackupResponse> {
  if (keyringState.vault) {
    const backupResult = await setInternetCredentials(
      VAULT_BACKUP_KEY,
      VAULT_BACKUP_KEY,
      keyringState.vault,
      options,
    );
    if (backupResult === false) {
      // const vaultBackupFailedError = new Error(VAULT_BACKUP_KEY);
      // Logger.error(vaultBackupFailedError, VAULT_BACKUP_FAILED);
      const response: KeyringBackupResponse = {
        success: false,
        error: VAULT_BACKUP_FAILED,
      };
      return response;
    }
    const response: KeyringBackupResponse = {
      success: true,
      vault: keyringState.vault,
    };
    return response;
  }
  // const vaultBackupUndefinedError = new Error(VAULT_BACKUP_KEY);
  // Logger.error(vaultBackupUndefinedError, VAULT_BACKUP_FAILED_UNDEFINED);
  const response: KeyringBackupResponse = {
    success: false,
    error: VAULT_BACKUP_FAILED_UNDEFINED,
  };
  return response;
}

/**
 * retrieves the vault backup from react-native-keychain
 * @returns Promise<KeyringBackupResponse>
  interface KeyringBackupResponse {
    success: boolean;
    error?: string;
    vault?: string;
  }
 */
export async function getVaultFromBackup(): Promise<KeyringBackupResponse> {
  const credentials = await getInternetCredentials(VAULT_BACKUP_KEY);
  if (credentials) {
    return { success: true, vault: credentials.password };
  }
  // const vaultFetchError = new Error(VAULT_BACKUP_KEY);
  // Logger.error(vaultFetchError, VAULT_FAILED_TO_GET_VAULT_FROM_BACKUP);
  return { success: false, error: VAULT_FAILED_TO_GET_VAULT_FROM_BACKUP };
}

/**
 * removes the vault backup from react-native-keychain
 */
export const resetVaultBackup = async (): Promise<void> => {
  await resetInternetCredentials(VAULT_BACKUP_KEY);
};
