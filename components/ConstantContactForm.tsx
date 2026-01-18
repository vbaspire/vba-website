"use client"

type ConstantContactFormProps = {
  formId: string
}

export default function ConstantContactForm({
  formId
}: ConstantContactFormProps) {
  return <div className="ctct-inline-form" data-form-id={formId}></div>
}
