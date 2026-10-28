import amara from '../assets/team/amara.webp'
import zainab from '../assets/team/zainab.webp'
import david from '../assets/team/david.webp'
import kunle from '../assets/team/kunle.webp'
import amaraFace from '../assets/team/amara-face.webp'
import zainabFace from '../assets/team/zainab-face.webp'
import davidFace from '../assets/team/david-face.webp'
import kunleFace from '../assets/team/kunle-face.webp'

// Placeholder names and roles. Replace with the real ones.
export const team = {
  amara: { name: 'Amara Okafor', role: 'Founder & CEO', img: amara, face: amaraFace },
  zainab: { name: 'Zainab Bello', role: 'Head of Marketing', img: zainab, face: zainabFace },
  david: { name: 'David Mensah', role: 'Chief Strategy Officer', img: david, face: davidFace },
  kunle: { name: 'Kunle Adeyemi', role: 'Lead Data Engineer', img: kunle, face: kunleFace },
}

export const teamList = Object.values(team)
