import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

interface PageHeaderProps {
  breadcrumb: string;
  kicker?: string;
  title: string;
  titleAccent?: string;
  lead?: string;
}

/* Sub-page header: breadcrumb, kicker, Playfair title (with optional
   gradient accent span), and a lead paragraph. */
export function PageHeader({ breadcrumb, kicker, title, titleAccent, lead }: PageHeaderProps) {
  return (
    <header className="page-head">
      <div className="wrap">
        <Reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>{breadcrumb}</span>
          </nav>
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 className="display page-title">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="grad-text">{titleAccent}</span>
              </>
            )}
          </h1>
          {lead && <p className="page-lead">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}
