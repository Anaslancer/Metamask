const Routes = {
  WALLET_VIEW: 'WalletView',
  BROWSER_VIEW: 'BrowserView',
  TRANSACTIONS_VIEW: 'TransactionsView',
  SETTINGS_VIEW: 'SettingsView',
  WALLET: {
    HOME: 'WalletTabHome',
    TAB_STACK_FLOW: 'WalletTabStackFlow',
    WALLET_CONNECT_SESSIONS_VIEW: 'WalletConnectSessionsView',
  },
  MODAL: {
    DELETE_WALLET: 'DeleteWalletModal',
    ROOT_MODAL_FLOW: 'RootModalFlow',
    MODAL_CONFIRMATION: 'ModalConfirmation',
    MODAL_MANDATORY: 'ModalMandatory',
    WHATS_NEW: 'WhatsNewModal',
    TURN_OFF_REMEMBER_ME: 'TurnOffRememberMeModal',
    UPDATE_NEEDED: 'UpdateNeededModal',
    ENABLE_AUTOMATIC_SECURITY_CHECKS: 'EnableAutomaticSecurityChecksModal',
    DETECTED_TOKENS: 'DetectedTokens',
    SRP_REVEAL_QUIZ: 'SRPRevealQuiz',
    WALLET_ACTIONS: 'WalletActions',
    NFT_AUTO_DETECTION_MODAL: 'NFTAutoDetectionModal',
    MULTI_RPC_MIGRATION_MODAL: 'MultiRPcMigrationModal',
  },
  BROWSER: {
    HOME: 'BrowserTabHome',
    URL_MODAL: 'BrowserUrlModal',
    VIEW: 'BrowserView',
  },
};

export default Routes;
