package dev.uofc_chessclub.Chess.Club;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    // http://localhost:8080/api/v1/announcements/Tech%20Workshop spaces are represented as %20
    @GetMapping("/{title}")
    public ResponseEntity<Announcements> getAnnouncementById(@PathVariable String title) {
        return new ResponseEntity<Announcements>(announcementService.singleAnnouncement(title), HttpStatus.OK);
    }


}
