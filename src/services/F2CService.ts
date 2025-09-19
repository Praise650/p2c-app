import { F2CEnvelope, ApiResponse } from '../../types';

interface F2CSubmissionResponse {
  success: boolean;
  txId?: string;
  explorerUrl?: string;
  error?: string;
}

// Mock F2C submission service for UI flow testing
export async function submitF2C(envelope: F2CEnvelope): Promise<F2CSubmissionResponse> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 700));

  // Basic validation
  if (!envelope || !envelope.payload || !envelope.sig) {
    return { success: false, error: 'Invalid envelope' };
  }

  // Return a fake tx id and explorer url
  const txId = `0x${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
  const explorerUrl = `https://explorer.aqy.devnet/tx/${txId}`;
  return { success: true, txId, explorerUrl };
}
