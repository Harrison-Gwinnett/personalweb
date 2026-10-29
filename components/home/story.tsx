import type { ReactNode } from 'react'
import AarvoChip from '@/components/AarvoChip'
import { getAge } from '@/lib/profile'

export const homeHeadline = 'Finance, markets and technology.'

function CurrentAge() {
  return getAge()
}

export const homeOverview = <>I&apos;m <CurrentAge />, and today my primary focus is <AarvoChip domain="tradrs.tv" icon="/history/tradrs-tv.png" />. I&apos;m also the founder of <AarvoChip />, which I continue to develop alongside it.</>

// Passages keep the narrative flowing, with breathing room at its turning points.
export const homeStory: ReactNode[][] = [[
  <>At 16 I started as a barrister&apos;s clerk in the City of London, then moved into finance, across deliverable FX and investment houses, until eventually I had a small network of investors of my own.</>,
  <>Somewhere along the way I picked up an obsession with luxury watches. Every watch I saw in the City, I wanted and naturally, at 16, I couldn&apos;t afford one.</>,
  <>So I built a way to win one.</>,
  <>A few months after turning 18 I incorporated <AarvoChip domain="watchlotto.co/" label="watchlotto.com" icon="/history/watchlotto.jpg" />, a competition site where you could win a luxury watch for a fraction of the price, using a game of skill inspired by Spot the Ball.</>,
  <>My first investors sent me Bitcoin in 2017 after a long time hunting for funding. They sent it in tranches, with BTC at $3,500 and $10,000 a coin. We soft launched the year after and burned through it.</>,
  <>We recapitalised and pushed aggressively from 2018 to 2020, until we had 185,000 visitors a month, weekly competitions, customers in 85 countries, and our brand inside FIFA 20 after sponsoring a League One club. Watchlotto was acquired on 19 November 2020. I was 22 at the time.</>,
], [
  <>After that exit I went straight back to crypto. It made sense as it&apos;s where my first money came from.</>,
  <>I built Virtual Versions, a digital ID project where a lot of the work went into reimagining digital humans. We raised approximately $3M, grew a community past a million people and launched a token just as Worldcoin hit and the world was focused on digital IDs.</>,
  <>In Q4 2023, we launched our product and token side by side. Almost overnight, the market maker we had hired to support trading acted against our interests and sank our token’s market. We fought to save the project but ultimately had to wind it down in early 2024. The firm was later charged by the US Department of Justice, and its founder pleaded guilty to wire fraud and conspiracy to commit market manipulation. The US proceedings involved multiple projects.</>,
  <>My friend Harry had been next to me through that whole launch, and between us we&apos;d seen all the good and all the bad. Projects started asking us to do it for them, from idea to launch. So we started <AarvoChip domain="tgeventures.co" label="tge.ventures" icon="/history/tge-ventures.jpg" />.</>,
  <>Then the whole industry changed, and TGE became <AarvoChip domain="www.quartic.co/courses/cpd-finance/web3-crypto-and-tokens/" label="Digital Asset Institute" icon="/digital-asset-institute-logo.jpeg" />, corporate training built on everything we&apos;d learned launching tokens, for teams at the Big Four, banks and asset managers. I stepped away from that part, but I came out knowing two things.</>,
  <>I&apos;d always wanted to build and grow a technology company, and I&apos;d built a network across trading and crypto that I wanted to put to better use.</>,
], [
  <><AarvoChip domain="tradrs.tv" icon="/history/tradrs-tv.png" /> brings together the relationships and experience I&apos;ve built across trading, finance and crypto. Over the years, I&apos;ve built a global network of traders, creators and communities, much of it through group chats and online communities.</>,
  <>tradrs.tv takes that audience and turns it into a proper distribution platform, the flow of traditional finance, Bloomberg-style, rebuilt as live streaming. Finance TV for how the world actually works now.</>,
  <><AarvoChip /> is the software I wish I&apos;d had in every business before it. Bookkeeping, data collection and compliance on autopilot, because source of funds was always a nightmare and bookkeeping wasn&apos;t much better. What I really wanted was for my numbers to tell me where to spend less and how to earn more in real time. That&apos;s aarvo.</>,
  <>It&apos;s since grown into a full platform for accountancy firms, up against the likes of IRIS, Capium and Karbon. The difference is that it&apos;s two-way. Instead of running your firm in one tool and your clients&apos; books in another, like Xero or QuickBooks, it&apos;s all in one place.</>,
  <>With agents and AI doing more of the work, I think the context between a firm and its clients is going to be the most important thing there is. We&apos;re HMRC-recognised, and we&apos;re working towards Peppol and the UAE&apos;s Federal Tax Authority.</>,
  <>Aarvo UK Limited is <a href="https://register.fca.org.uk/s/firm?id=001Sk00000y4HHXIA2" target="_blank" rel="noopener noreferrer" className="history-company-link">registered as a payment services agent of Yapily Connect Ltd</a>, under FCA firm reference number 1053814.</>,
  <>If you&apos;re building in finance, crypto or accounting, my DMs are open.</>,
]]
