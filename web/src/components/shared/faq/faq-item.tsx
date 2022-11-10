function FAQItem({id, title, children, onClick, isExpanded, index}) {
  return (
    <li className="border-b-2 mt-4 border-black">
      <h3 className="mb-3 flex">
        <button
          className="text-left flex-1"
          id={`${id}-header`}
          onClick={() => onClick(isExpanded ? -1 : index)}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}>
          {title}
        </button>
      </h3>
      <article id={`${id}-panel`} aria-labelledby={`${id}-header`} hidden={!isExpanded}>
        {children}
      </article>
    </li>
  );
}
export default FAQItem;
