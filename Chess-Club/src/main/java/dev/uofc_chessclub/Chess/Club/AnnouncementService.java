package dev.uofc_chessclub.Chess.Club;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepository;

    public List<Announcements> allAnnouncements() {
        return announcementRepository.findAll();
    }

    public Announcements singleAnnouncement(String title) {
        return announcementRepository.findByTitle(title).orElse(null);
    }
}
