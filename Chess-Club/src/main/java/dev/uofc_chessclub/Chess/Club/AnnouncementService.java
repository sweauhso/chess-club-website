package dev.uofc_chessclub.Chess.Club;

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
}
