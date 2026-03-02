
import { supabase } from '../supabaseClient';
import { 
  Transaction, Reminder, AttendanceRecord, BillRecord, 
  BettingRecord, LeaveRecord, SavingsGoal, SavingsRecord, 
  SalaryHistoryItem, PayrollProfile, LeaveType 
} from '../types';

export const supabaseService = {
  // Profile
  async getProfile() {
    const { data, error } = await supabase.from('profiles').select('*').single();
    if (error && error.code !== 'PGRST116') throw error;
    return data as PayrollProfile | null;
  },
  async updateProfile(profile: PayrollProfile) {
    const { error } = await supabase.from('profiles').upsert({ id: 1, ...profile });
    if (error) throw error;
  },

  // Generic fetchers
  async getTransactions() {
    const { data, error } = await supabase.from('transactions').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data as Transaction[];
  },
  async getReminders() {
    const { data, error } = await supabase.from('reminders').select('*').order('date', { ascending: true });
    if (error) throw error;
    return data as Reminder[];
  },
  async getAttendance() {
    const { data, error } = await supabase.from('attendance').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data as AttendanceRecord[];
  },
  async getBills() {
    const { data, error } = await supabase.from('bills').select('*').order('dueDate', { ascending: true });
    if (error) throw error;
    return data as BillRecord[];
  },
  async getBettingRecords() {
    const { data, error } = await supabase.from('betting_records').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data as BettingRecord[];
  },
  async getLeaveQuotas() {
    const { data, error } = await supabase.from('leave_quotas').select('*');
    if (error) throw error;
    return data as LeaveType[];
  },
  async getLeaveHistory() {
    const { data, error } = await supabase.from('leave_history').select('*').order('startDate', { ascending: false });
    if (error) throw error;
    return data as LeaveRecord[];
  },
  async getSavingsGoals() {
    const { data, error } = await supabase.from('savings_goals').select('*');
    if (error) throw error;
    return data as SavingsGoal[];
  },
  async getSavingsRecords() {
    const { data, error } = await supabase.from('savings_records').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data as SavingsRecord[];
  },
  async getSalaryHistory() {
    const { data, error } = await supabase.from('salary_history').select('*').order('year', { ascending: false });
    if (error) throw error;
    return data as SalaryHistoryItem[];
  },

  // Generic Updaters (Upsert for simplicity in this demo, but usually you'd have more specific logic)
  async syncTransactions(records: Transaction[]) {
    const { error } = await supabase.from('transactions').upsert(records);
    if (error) throw error;
  },
  async syncReminders(records: Reminder[]) {
    const { error } = await supabase.from('reminders').upsert(records);
    if (error) throw error;
  },
  async syncAttendance(records: AttendanceRecord[]) {
    const { error } = await supabase.from('attendance').upsert(records);
    if (error) throw error;
  },
  async syncBills(records: BillRecord[]) {
    const { error } = await supabase.from('bills').upsert(records);
    if (error) throw error;
  },
  async syncBettingRecords(records: BettingRecord[]) {
    const { error } = await supabase.from('betting_records').upsert(records);
    if (error) throw error;
  },
  async syncLeaveQuotas(records: LeaveType[]) {
    const { error } = await supabase.from('leave_quotas').upsert(records);
    if (error) throw error;
  },
  async syncLeaveHistory(records: LeaveRecord[]) {
    const { error } = await supabase.from('leave_history').upsert(records);
    if (error) throw error;
  },
  async syncSavingsGoals(records: SavingsGoal[]) {
    const { error } = await supabase.from('savings_goals').upsert(records);
    if (error) throw error;
  },
  async syncSavingsRecords(records: SavingsRecord[]) {
    const { error } = await supabase.from('savings_records').upsert(records);
    if (error) throw error;
  },
  async syncSalaryHistory(records: SalaryHistoryItem[]) {
    const { error } = await supabase.from('salary_history').upsert(records);
    if (error) throw error;
  },

  // Specific Deletion Helpers
  async deleteTransaction(id: string) {
    const { error } = await supabase.from('transactions').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteReminder(id: string) {
    const { error } = await supabase.from('reminders').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteAttendance(id: string) {
    const { error } = await supabase.from('attendance').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteBill(id: string) {
    const { error } = await supabase.from('bills').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteBettingRecord(id: string) {
    const { error } = await supabase.from('betting_records').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteLeaveHistory(id: string) {
    const { error } = await supabase.from('leave_history').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteSavingsGoal(id: string) {
    const { error } = await supabase.from('savings_goals').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteSavingsRecord(id: string) {
    const { error } = await supabase.from('savings_records').delete().eq('id', id);
    if (error) throw error;
  },
  async deleteSalaryHistory(id: string) {
    const { error } = await supabase.from('salary_history').delete().eq('id', id);
    if (error) throw error;
  },
};
