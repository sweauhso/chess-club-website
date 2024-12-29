package dev.uofc_chessclub.Chess.Club;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/announcements")
public class AnnouncementsController {

    @Autowired
    private AnnouncementService announcementService;

    @GetMapping
    public ResponseEntity<List<Announcements>> getAllAnnouncements() {
        return new ResponseEntity<List<Announcements>>(announcementService.allAnnouncements(), HttpStatus.OK);
    }
}
