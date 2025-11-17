export type Banner = {
  id: string
  title: string
  subtitle?: string
  imageUrl: string
  backgroundColor?: string
  textColor?: string
  actionText?: string
  actionUrl?: string
  priority: number
  isActive: boolean
  startDate?: string
  endDate?: string
}