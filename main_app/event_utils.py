from main_app.models import Event


def get_calendar_occurrences(from_date, to_date, published_only=True):
    queryset = Event.objects.prefetch_related("cancellations")
    if published_only:
        queryset = queryset.filter(is_published=True)

    occurrences = []
    for event in queryset:
        occurrences.extend(event.get_occurrences(from_date=from_date, to_date=to_date))

    occurrences.sort(key=lambda o: o["start_datetime"])
    return occurrences
