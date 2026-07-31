const METRIC_PATTERN =
  /((?:[$£][\d,.]+(?:\s?million|[Mm])?\+?)|(?:\b\d[\d,.]*\+?\s+(?:million(?:\s+members)?|(?:regular\s+)?visitors|individuals|days|months|years|(?:different\s+)?countries)\b)|(?:\b\d+\+\s+tools\b)|(?:\bY1\b)|(?:\bage\s+\d+\b)|(?:\b0\b))/gi

const EXACT_METRIC_PATTERN =
  /^(?:[$£][\d,.]+(?:\s?million|[Mm])?\+?|\d[\d,.]*\+?\s+(?:million(?:\s+members)?|(?:regular\s+)?visitors|individuals|days|months|years|(?:different\s+)?countries)|\d+\+\s+tools|Y1|age\s+\d+|0)$/i

export default function HighlightedText({ children }: { children: string }) {
  return children.split(METRIC_PATTERN).map((part, index) =>
    EXACT_METRIC_PATTERN.test(part) ? (
      <strong key={`${part}-${index}`} style={{ color: '#1B1C18', fontWeight: 600 }}>
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
