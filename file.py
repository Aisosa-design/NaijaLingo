def award_xp(user_id, score):
    xp = 0
    if score > 80:
        xp = 20
    elif score > 50:
        xp = 10
    else:
        xp = 5
    update_user_xp(user_id, xp)
    check_badges(user_id)
