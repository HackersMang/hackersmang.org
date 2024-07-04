function page() {
    return (
        <div className="tt-widget">
            <div className="tt-widget-fallback">
                <p>
                    <a href="https://www.tickettailor.com/all-tickets/hackerspacemangaluru/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" target="_blank">
                        Click here to buy tickets
                    </a>
                </p>
            </div>
            <script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/all-tickets/hackerspacemangaluru/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget">
            </script>
        </div>
    );
}

export default page